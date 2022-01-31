import React from 'react';
import ContactUs from './ContactUs';

export default function TestResultsAdvancedTwo(newScore) {
	console.log(newScore.finalScore);
	let currentScore = newScore.finalScore;

	let courseResults = JSON.parse(localStorage.getItem('classOptions'));

	const recommendationList = courseResults.map((result, index) => (
		<p key={index}>{result}</p>
	));
	console.log(recommendationList);

	return (
		<>
			<div className="test-results-page">
				{currentScore >= 45 && currentScore <= 53 ? (
					<section>
						<div className="test-results-title">
							<h2>Congratulations! You achieved level C1</h2>
							<h2>Here are some course recommendations based on your level:</h2>
							<div className="link-wrapper">
								<a
									href="https://www.carl-schurz-haus.de/nc/sprachkurse/erwachsene.html?kathaupt=1&katid=71&katvaterid=64&katname=A1"
									target="_blank"
									rel="noreferrer"
									className="recommendations-link"
								>
									C1 course recommendations
								</a>
							</div>
						</div>
						<ContactUs />
					</section>
				) : currentScore >= 54 ? (
					<div className="test-results-page">
						<section>
							<div className="test-results-title">
								<h2>Congratulations! You achieved level C2</h2>

								<h2>
									Here are some course recommendations based on your level:
								</h2>
								<div className="link-wrapper">
									<a
										href="https://www.carl-schurz-haus.de/nc/sprachkurse/erwachsene.html?kathaupt=1&katid=65&katvaterid=64&katname=A2"
										target="_blank"
										rel="noreferrer"
									>
										C2 course recommendations
									</a>
								</div>
							</div>
							<ContactUs />
						</section>
					</div>
				) : currentScore <= 44 ? (
					<div className="test-results-page">
						<section>
							<div className="test-results-title">
								<h2>Congratulations! You achieved level B2</h2>

								<h2>
									Here are some course recommendations based on your level:
								</h2>

								<div className="link-wrapper">
									<a
										href="https://www.carl-schurz-haus.de/nc/sprachkurse/erwachsene.html?kathaupt=1&katid=66&katvaterid=64&katname=B1"
										target="_blank"
										rel="noreferrer"
									>
										B2 course recommendations
									</a>
								</div>
							</div>
							<ContactUs />
						</section>
					</div>
				) : (
					<section>
						<h2>Congratulations! You achieved level B1</h2>
						<h2>Here are some course recommendations based on your level:</h2>
						<div className="link-wrapper">
							<a
								href="https://www.carl-schurz-haus.de/nc/sprachkurse/erwachsene.html?kathaupt=1&katid=67&katvaterid=64&katname=B2"
								target="_blank"
								rel="noreferrer"
							>
								B1 course recommendations
							</a>
						</div>
						<ContactUs />
					</section>
				)}
			</div>
		</>
	);
}
