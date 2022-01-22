import React, { useState } from 'react';
import LanguageTest from './LanguageTest';
import { questions } from './questions.js';

export default function App() {
	const [index, setIndex] = useState(0);
	const { questionText, answerOptions, questionTextEnglish } = questions[index];
	const [formComplete, setFormComplete] = useState(false);
	const [classOptions, setClassOptions] = useState([]);
	const [style, setStyle] = useState('answer-btn');
	const classOptionsFinal = classOptions;
	console.log(classOptionsFinal);

	function nextQuestion() {
		let nextQuestion = index + 1;
		if (nextQuestion < questions.length) {
			setIndex(nextQuestion);
			setStyle('');
			setStyle('answer-btn-2');
		} else {
			setFormComplete(true);
		}
	}

	function handleAnswerClass(answerClass) {
		setClassOptions([answerClass + ' '].concat(classOptions));
	}

	function handleAnswerClick(e, answerClass) {
		console.log(e.target.className);
		let current = e.target;
		current.classList.toggle('answer-btn-click');
		handleAnswerClass(answerClass);
	}

	return (
		<div className="test">
			{formComplete ? (
				<LanguageTest courses={classOptionsFinal} />
			) : (
				<section className="question-container">
					<h3>{questionText}</h3>
					<hr className="line"></hr>
					<h3>{questionTextEnglish}</h3>
					<div className="answer-section">
						{answerOptions.map((answerOption, index) => (
							<button
								id="answer-btn"
								key={index}
								onClick={(e) => handleAnswerClick(e, answerOption.answerClass)}
								className={style}
							>
								{answerOption.answerText}
							</button>
						))}
						<p>You have selected: {classOptions}</p>
						<button onClick={() => nextQuestion()} className="next-btn">
							Next
						</button>
					</div>
				</section>
			)}
		</div>
	);
}
