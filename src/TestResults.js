import React from 'react';

export default function TestResults(score) {
	const currentScore = score;
	console.log(currentScore);

	return (
		<>
			<p>You scored: {currentScore.scoreSix} </p>
			<p>Course recommendations: {}</p>
		</>
	);
}
