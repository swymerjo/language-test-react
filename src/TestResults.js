import React from 'react';

export default function TestResults({ score, courses }) {
	let coursesTest = courses.courses;
	console.log(coursesTest);
	return (
		<>
			<p>You scored: {score} </p>
			<p>Course recommendations: {coursesTest}</p>
		</>
	);
}
