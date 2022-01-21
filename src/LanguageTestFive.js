import React, { useState } from 'react';
import { questionsFive } from './questionsFive';

export default function LanguageTestFour(scoreFour) {
	const currentScore = scoreFour;
	console.log(currentScore.scoreFour);
	const [indexLanguageTest, setIndexLanguageTest] = useState(0);
	const { question, answerOptions, questionNumber, id } =
		questionsFive[indexLanguageTest];
	const [score, setScore] = useState(currentScore.scoreFour);
	const [testComplete, setTestComplete] = useState(false);

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
		if (nextQuestionTest < questionsFive.length) {
			setIndexLanguageTest(nextQuestionTest);
		} else {
			setTestComplete(true);
		}
	}

	return (
		<>
			{testComplete ? (
				<section className="language-test-two">
					<p>hi</p>
					{/* <TestResults score={score} courses={courses}/> */}
				</section>
			) : (
				<div className="language-test-container">
					<section className="sub-question-container">
						<h3>
							In this section you must choose the word which best fits each
							space in the text below.
						</h3>
					</section>

					<h3 className="language-test-question sub-question-text">
						{questionNumber}. {question}
					</h3>
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
				</div>
			)}
		</>
	);
}
