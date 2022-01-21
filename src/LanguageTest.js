import React, { useState } from 'react';
// import TestResults from "./TestResults";
import LanguageTestTwo from './LanguageTestTwo';

export default function LanguageTest(courses) {
	const languageTestQuestionsOne = [
		{
			id: 0,
			questionNumber: 1,
			image: './images/pic-1.jpg',
			answerOptions: [
				{ answerText: 'in a shop', isCorrect: false },
				{ answerText: 'in a hotel', isCorrect: true },
				{ answerText: 'in a taxi', isCorrect: false },
			],
		},
		{
			id: 1,
			questionNumber: 2,
			image: './images/pic-2.jpg',
			answerOptions: [
				{ answerText: 'in a library', isCorrect: false },
				{ answerText: 'in a bank', isCorrect: true },
				{ answerText: 'in a police station', isCorrect: false },
			],
		},
		{
			id: 2,
			questionNumber: 3,
			image: './images/pic-3.jpg',
			answerOptions: [
				{ answerText: 'outside a theatre', isCorrect: true },
				{ answerText: 'outside a supermarket', isCorrect: false },
				{ answerText: 'outside a restaurant', isCorrect: false },
			],
		},
		{
			id: 3,
			questionNumber: 4,
			image: './images/pic-4.jpg',
			answerOptions: [
				{ answerText: "at a travel agent's", isCorrect: false },
				{ answerText: 'at a music school', isCorrect: true },
				{ answerText: 'at a restaurant', isCorrect: false },
			],
		},
		{
			id: 4,
			questionNumber: 5,
			image: './images/pic-5.jpg',
			answerOptions: [
				{ answerText: 'at a cinema', isCorrect: false },
				{ answerText: 'in a hotel', isCorrect: false },
				{ answerText: 'at a camp-site', isCorrect: true },
			],
		},
	];

	const [indexLanguageTest, setIndexLanguageTest] = useState(0);
	const { image, answerOptions, questionNumber, id } =
		languageTestQuestionsOne[indexLanguageTest];
	const [score, setScore] = useState(0);
	const [testComplete, setTestComplete] = useState(false);
	console.log(courses);

	function handleAnswerClickTest(isCorrect) {
		console.log(isCorrect);
		console.log(score);
		if (isCorrect) {
			setScore(score + 1);
			console.log(score);
			nextQuestionTest();
		} else {
			nextQuestionTest();
		}
	}

	function nextQuestionTest() {
		let nextQuestionTest = id + 1;
		console.log(nextQuestionTest);
		if (nextQuestionTest < languageTestQuestionsOne.length) {
			setIndexLanguageTest(nextQuestionTest);
		} else {
			setTestComplete(true);
		}
	}

	return (
		<>
			{testComplete ? (
				<section className="language-test-two">
					<LanguageTestTwo scoreOne={score} />
					{/* <TestResults score={score} courses={courses}/> */}
				</section>
			) : (
				<section className="language-test-container">
					<h3>Question {questionNumber}</h3>
					<h3 className="language-test-question">
						Where can you see this notice?
					</h3>
					<img className="test-image" src={image} alt="test-image" />
					<div className="answer-section" key={questionNumber}>
						{answerOptions.map((answerOption, index) => (
							<button
								key={index}
								onClick={() => handleAnswerClickTest(answerOption.isCorrect)}
								className="answer-btn"
							>
								{answerOption.answerText}
							</button>
						))}
						<p>Question {questionNumber}/30</p>
						<p>Your score is {score}</p>
					</div>
				</section>
			)}
		</>
	);
}
