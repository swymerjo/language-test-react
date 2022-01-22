import React from 'react';

export default function TestResults(score) {
	const currentScore = score;
	console.log(currentScore.scoreSix);

	return (
		<>
			{currentScore.scoreSix <= 15 ? (
				<section>
					<p>your score is: {currentScore.scoreSix} (A1)</p>
				</section>
			) : currentScore.scoreSix >= 16 && currentScore.scoreSix <= 23 ? (
				<section>
					<p>your score is: {currentScore.scoreSix} (A2)</p>
				</section>
			) : currentScore.scoreSix >= 24 && currentScore.scoreSix <= 30 ? (
				<section>
					<p>your score is: {currentScore.scoreSix} (B1)</p>
				</section>
			) : (
				currentScore.scoreSix >= 31 && currentScore.scoreSix <= 36(<p>B2</p>)
			)}
		</>
	);
}
