import React, { useState } from 'react';
import { questionsSix } from './questionsSix';
import TestResults from './TestResults';

export default function LanguageTestFour(scoreFive) {
	const currentScore = scoreFive;
	console.log(currentScore.scoreFive);
	const [indexLanguageTest, setIndexLanguageTest] = useState(0);
	const { question, answerOptions, questionNumber, id } =
		questionsSix[indexLanguageTest];
	const [score, setScore] = useState(currentScore.scoreFive);
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
		if (nextQuestionTest < questionsSix.length) {
			setIndexLanguageTest(nextQuestionTest);
		} else {
			setTestComplete(true);
		}
	}

	return (
		<>
			{testComplete ? (
				<section className="language-test-two">
					<TestResults scoreSix={score} />
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
						<p>Question {questionNumber}/40</p>
						<p>Your score is {score}</p>
					</div>
				</div>
			)}
		</>
	);
}
