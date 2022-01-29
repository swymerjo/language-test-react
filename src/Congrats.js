import React, { useState } from 'react';
import AdvancedTestOne from './AdvancedTestOne';
import TestResults from './TestResults';
import TestResultsAdvanced from './TestResultsAdvanced';

export default function Congrats() {
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
					<h5>Click 'Next' to continue the test</h5>
					<h5>Click 'Finish' to finish the test and see your results</h5>
					<button onClick={() => handleFinish()}>Finish</button>
					<button onClick={() => handleNext()}>Next</button>
				</section>
			) : next ? (
				<AdvancedTestOne />
			) : (
				<TestResultsAdvanced />
			)}
		</>
	);
}
