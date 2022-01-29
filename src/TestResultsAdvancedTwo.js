import React from 'react';
import ContactUs from './ContactUs';

export default function TestResultsAdvancedTwo(score) {
	const currentScore = 58;
	console.log(currentScore);
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
				{currentScore >= 48 && currentScore <= 54 ? (
					<section>
						<div className="test-results-title">
							<h2>Congratulations! You achieved level C1</h2>
							<h2>Here are some course recommendations based on your level:</h2>
							<div className="link-wrapper">
								<a
									href=""
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
				) : (
					<section>
						<div className="test-results-title">
							<h2>Congratulations! You achieved level C2</h2>
							<h2>Here are some course recommendations based on your level:</h2>
							<div className="link-wrapper">
								<a href="" target="_blank" rel="noreferrer">
									C2 course recommendations
								</a>
							</div>
						</div>
						<ContactUs />
					</section>
				)}
			</div>
		</>
	);
}
