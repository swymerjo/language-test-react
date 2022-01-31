import React from 'react';
import ContactUs from './ContactUs';

export default function TestResultsAdvanced() {
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
				<section>
					<div className="test-results-title">
						<h2>Congratulations! You achieved level B2</h2>
						<h2>Here are some course recommendations based on your level:</h2>
						<div className="link-wrapper">
							<a
								href="https://www.carl-schurz-haus.de/nc/sprachkurse/erwachsene.html?kathaupt=1&katid=67&katvaterid=64&katname=B2"
								target="_blank"
								rel="noreferrer"
								className="recommendations-link"
							>
								B2 course recommendations
							</a>
						</div>
					</div>
				</section>
				<ContactUs />
			</div>
		</>
	);
}
