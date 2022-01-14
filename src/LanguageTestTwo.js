import React, { useState } from "react";


export default function LanguageTestTwo(){

    const languageTestQuestionsTwo = [
        {
            id: 0,
            questionNumber: 6,
           question: "Some people __________ Scotland speak a different language called Gaelic.",
            answerOptions: [
            { answerText: "on", isCorrect: false},
            { answerText: "in", isCorrect: true},
            { answerText: "at", isCorrect: false}
            ]
        },
        {
            id: 1,
            questionNumber: 7,
            question:"There are ________ five million people in Scotland,",
            answerOptions: [
            { answerText: "about", isCorrect: true},
            { answerText: "between", isCorrect: false},
            { answerText: "among", isCorrect: false}
            ]
        },
        {
            id: 2,
            questionNumber: 8,
            question: "Edinburgh is ____ most famous city.",
            answerOptions: [
            { answerText: "his", isCorrect: false},
            { answerText: "your", isCorrect: false},
            { answerText: "its", isCorrect: true}
            ]
        },
        {
            id: 3,
            questionNumber: 9,
            question: "A long time ago, there ____ many forests",
            answerOptions: [
            { answerText: "is", isCorrect: false},
            { answerText: "were", isCorrect: true},
            { answerText: "was", isCorrect: false}
            ]
        },
        {
            id: 4,
            questionNumber: 10,
            question: "but now there are only a ____.",
            answerOptions: [
            { answerText: "few", isCorrect: true},
            { answerText: "little", isCorrect: false},
            { answerText: "lot", isCorrect: false}
            ]
        }
    ];

    const [indexLanguageTest, setIndexLanguageTest] = useState(0);
    const {question,answerOptions,questionNumber, id} = languageTestQuestionsTwo[indexLanguageTest];
    const [score, setScore] = useState(0);
    const [testComplete, setTestComplete] = useState(false);

    function handleAnswerClickTest(isCorrect){
        console.log(isCorrect);
        console.log(score);
        if (isCorrect) {
            setScore(score + 1);
            console.log(score);
            nextQuestionTest(); }
            else {
            nextQuestionTest();
    
    }
    };
    
    function nextQuestionTest(){
        let nextQuestionTest = id + 1;
        console.log(nextQuestionTest);
        if (nextQuestionTest < languageTestQuestionsTwo.length){
          setIndexLanguageTest(nextQuestionTest);
        } else {
          setTestComplete(true);
      }
    };
    

    return (
        <div className="language-test-container">
        <section className="sub-question-container">
            <h3 className="question-background">In this section you must choose the word which best fits each space in the text below.</h3>       
            <h4 className="sub-question-text">
Scotland is the north part of the island of Great Britain.  The Atlantic Ocean is on the west and the North Sea on the east.  Some people ____ Scotland speak a different language called Gaelic.  There are ____ five million people in Scotland, and Edinburgh is ____ most famous city.
Scotland has many mountains; the highest one is called 'Ben Nevis'.  In the south of Scotland, there are a lot of sheep.  A long time ago, there ____ many forests, but now there are only a ____.
Scotland is only a small country, but it is quite beautiful.</h4>
        </section>

<h3 className="language-test-question sub-question-text">{questionNumber}. {question}</h3>
<div className='answer-section' key={questionNumber}>
	{answerOptions.map((answerOption, index) => (
		<button key={index} onClick={() => handleAnswerClickTest(answerOption.isCorrect)}className='answer-btn'>{answerOption.answerText}</button>
	))}
     <p>Question {questionNumber}/30</p>
    <p>Your score is {score}</p> 
        </div>
</div>
    
        
    )
};