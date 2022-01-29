import React, { useState } from 'react';
import AdvancedTestOne from './AdvancedTestOne';
import TestResultsAdvanced from './TestResultsAdvanced';

export default function Congrats(score) {
	let currentScore = score.scoreSix;
	console.log(currentScore);
	// send score to local storage
	const [next, setNext] = useState(false);
	const [finish, setFinish] = useState(false);
	console.log(next, finish);

	function handleNext() {
		setNext(true);
	}

	function handleFinish() {
		setFinish(true);
	}

	return (
		<>
			{!next && !finish ? (
				<section className="congratulations">
					<h3 className="congrats">
						Congratulations! You scored at least 38/40. The following 20
						questions will be more advanced.
					</h3>
					<h4>Click 'Next' to continue the test</h4>
					<h4>Click 'Finish' to finish the test and see your results</h4>
					<div className="btn-wrap">
						<button className="finish-btn" onClick={() => handleFinish()}>
							Finish
						</button>
						<button className="advance-btn" onClick={() => handleNext()}>
							Next
						</button>
					</div>
				</section>
			) : next ? (
				<AdvancedTestOne />
			) : (
				<TestResultsAdvanced />
			)}
		</>
	);
}
