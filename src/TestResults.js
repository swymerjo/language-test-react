import React from 'react';

export default function TestResults(score) {
	const currentScore = score;
	console.log(currentScore.scoreSix);
	let courseResults = JSON.parse(localStorage.getItem('classOptions'));
	console.log(typeof courseResults);
	console.log(courseResults);

	// if (courseResults.includes('lehrbuch')) {
	// 	courseResults = 'sammy';
	// }

	return (
		<>
			{currentScore.scoreSix <= 15 ? (
				<section>
					<p>your score is: {currentScore.scoreSix}(A1)</p>
					<p>Course recommendations:</p>
					{courseResults.map((result, index) => (
						<p key={index}>{result}</p>
					))}
				</section>
			) : currentScore.scoreSix >= 16 && currentScore.scoreSix <= 23 ? (
				<section>
					<p>your score is: {currentScore.scoreSix} (A2)</p>
					<p>Course recommendations:</p>
					{courseResults.map((result, index) => (
						<p key={index}>{result}</p>
					))}
				</section>
			) : currentScore.scoreSix >= 24 && currentScore.scoreSix <= 30 ? (
				<section>
					<p>your score is: {currentScore.scoreSix} (B1)</p>
					<p>Course recommendations:</p>
					{courseResults.map((result, index) => (
						<p key={index}>{result}</p>
					))}
				</section>
			) : (
				currentScore.scoreSix >= 31 &&
				currentScore.scoreSix <=
					36(
						<section>
							<p>your score is: {currentScore.scoreSix} (B2)</p>
							<p>Course recommendations:</p>
							{courseResults.map((result, index) => (
								<p key={index}>{result}</p>
							))}
						</section>
					)
			)}
		</>
	);
}
