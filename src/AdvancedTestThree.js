import React, { useState } from 'react';
import { advancedQuestionsThree } from './advancedQuestionsThree';
import ContactUs from './ContactUs';

export default function AdvancedTestThree() {
	const [indexLanguageTest, setIndexLanguageTest] = useState(0);
	const { answerOptions, questionNumber, id, question } =
		advancedQuestionsThree[indexLanguageTest];
	const [score, setScore] = useState(0);
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
					<ContactUs />
				</section>
			) : (
				<section className="language-test-container">
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
