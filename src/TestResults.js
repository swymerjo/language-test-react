import React, { useState } from 'react';

export default function TestResults(score) {
	const currentScore = score;
	let courseResults = JSON.parse(localStorage.getItem('classOptions'));

	// if (courseResults.includes('lehrbuch')) {
	// 	courseResults = 'sammy';
	// }
	const recommendationList = courseResults.map((result, index) => (
		<p key={index}>{result}</p>
	));
	console.log(recommendationList);

	return (
		<>
			{currentScore.scoreSix <= 15 ? (
				<section>
					<p>your score is: {currentScore.scoreSix}(A1)</p>
					<a
						href="https://www.carl-schurz-haus.de/nc/sprachkurse/erwachsene.html?kathaupt=1&katid=71&katvaterid=64&katname=A1"
						target="_blank"
					>
						A1 course recommendations
					</a>
				</section>
			) : currentScore.scoreSix >= 16 && currentScore.scoreSix <= 23 ? (
				<section>
					<p>your score is: {currentScore.scoreSix} (A2)</p>
					<a
						href="https://www.carl-schurz-haus.de/nc/sprachkurse/erwachsene.html?kathaupt=1&katid=65&katvaterid=64&katname=A2"
						target="_blank"
					>
						A2 course recommendations
					</a>
				</section>
			) : currentScore.scoreSix >= 24 && currentScore.scoreSix <= 30 ? (
				<section>
					<p>your score is: {currentScore.scoreSix} (B1)</p>
					<a
						href="https://www.carl-schurz-haus.de/nc/sprachkurse/erwachsene.html?kathaupt=1&katid=66&katvaterid=64&katname=B1"
						target="_blank"
					>
						B1 course recommendations
					</a>
				</section>
			) : (
				currentScore.scoreSix >= 31 &&
				currentScore.scoreSix <=
					36(
						<section>
							<p>your score is: {currentScore.scoreSix} (B2)</p>
							<a
								href="https://www.carl-schurz-haus.de/nc/sprachkurse/erwachsene.html?kathaupt=1&katid=67&katvaterid=64&katname=B2"
								target="_blank"
							>
								B2 course recommendations
							</a>
						</section>
					)
			)}
		</>
	);
}
