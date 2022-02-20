import React from 'react';
import ContactUs from './ContactUs';

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
			<div className="test-results-page">
				{currentScore.scoreSix <= 15 ? (
					<section>
						<h2>Congratulations! You achieved level A1</h2>
						<h2>Here are some course recommendations based on your level:</h2>
						<div className="link-wrapper">
							<a
								href="https://www.carl-schurz-haus.de/nc/sprachkurse/erwachsene.html?kathaupt=1&katid=71&katvaterid=64&katname=A1"
								target="_blank"
								rel="noreferrer"
								className="recommendations-link"
							>
								A1 course recommendations
							</a>
						</div>

						<ContactUs />
					</section>
				) : currentScore.scoreSix >= 16 && currentScore.scoreSix <= 23 ? (
					<section>
						<h2>Congratulations! You achieved level A2</h2>
						<h2>Here are some course recommendations based on your level:</h2>
						<div className="link-wrapper">
							<a
								href="https://www.carl-schurz-haus.de/nc/sprachkurse/erwachsene.html?kathaupt=1&katid=65&katvaterid=64&katname=A2"
								target="_blank"
								rel="noreferrer"
							>
								A2 course recommendations
							</a>
						</div>
						<ContactUs />
					</section>
				) : currentScore.scoreSix >= 24 && currentScore.scoreSix <= 30 ? (
					<section>
						<h2>Congratulations! You achieved level B1</h2>
						<h2>Here are some course recommendations based on your level:</h2>
						<div className="link-wrapper">
							<a
								href="https://www.carl-schurz-haus.de/nc/sprachkurse/erwachsene.html?kathaupt=1&katid=66&katvaterid=64&katname=B1"
								target="_blank"
								rel="noreferrer"
							>
								B1 course recommendations
							</a>
						</div>
						<ContactUs />
					</section>
				) : (
					currentScore.scoreSix >= 31 &&
					currentScore.scoreSix <=
						35(
							<section>
								<h2>Congratulations! You achieved level B2</h2>
								<h2>
									Here are some course recommendations based on your level:
								</h2>
								<div className="link-wrapper">
									<a
										href="https://www.carl-schurz-haus.de/nc/sprachkurse/erwachsene.html?kathaupt=1&katid=67&katvaterid=64&katname=B2"
										target="_blank"
										rel="noreferrer"
									>
										B2 course recommendations
									</a>
								</div>
								<ContactUs />
							</section>
						)
				)}
			</div>
		</>
	);
}
