import React, { useState } from 'react';
import { advancedQuestionsThree } from './advancedQuestionsThree';
import TestResultsAdvancedTwo from './TestResultsAdvancedTwo';

export default function AdvancedTestThree(newScore) {
	console.log(newScore.newScore.newScore);
	const [indexLanguageTest, setIndexLanguageTest] = useState(0);
	const { answerOptions, questionNumber, id, question } =
		advancedQuestionsThree[indexLanguageTest];
	const [score, setScore] = useState(newScore.newScore.newScore);
	const [testComplete, setTestComplete] = useState(false);
	function handleAnswerClickTest(isCorrect) {
		if (isCorrect) {
			setScore(score + 1);
			nextQuestionTest();
		} else {
			nextQuestionTest();
		}
	}

	function nextQuestionTest() {
		let nextQuestionTest = id + 1;
		if (nextQuestionTest < advancedQuestionsThree.length) {
			setIndexLanguageTest(nextQuestionTest);
		} else {
			setTestComplete(true);
		}
	}

	return (
		<>
			{testComplete ? (
				<section className="language-test-two">
					<TestResultsAdvancedTwo finalScore={score} />
				</section>
			) : (
				<section className="language-test-container-two">
					<section className="sub-question-container">
						<h2>
							In this section you must choose the word which best fits each
							space in the text below.
						</h2>
					</section>
					<h3 className="language-test-question">{question}</h3>
					<div className="answer-section" key={questionNumber}>
						{answerOptions.map((answerOption, index) => (
							<button
								key={index}
								onClick={() => handleAnswerClickTest(answerOption.isCorrect)}
								className="answer-btn-test"
							>
								{answerOption.answerText}
							</button>
						))}
						<p>Question {questionNumber}/20</p>
					</div>
				</section>
			)}
		</>
	);
}
