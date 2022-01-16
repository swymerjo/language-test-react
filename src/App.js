import React, { useState } from 'react';
import LanguageTest from './LanguageTest';

 

export default function App() {
	const questions = [
		{ id: 1,
			questionText: 'Welcher Sprachkurs interessiert Sie?',
      questionTextEnglish: 'Which language courses are you interested in?',
			answerOptions: [
				{ answerText: 'Conversation', answerClass: "class-1" },
				{ answerText: 'Business English', answerClass: "class-2" },
				{ answerText: 'Intensive', answerClass: "class-3"},
				{ answerText: 'mit Lehrbuch', answerClass: "class-4" },
        { answerText: 'Grammar!', answerClass: "class-5" },
				{ answerText: 'Testvorbereitung (CAE, IELTS, TOEFL usw.)', answerClass: "class-6"},
				{ answerText: 'etwas kulturelles (z.B. Art Talks! oder English through Film)', answerClass: "class-7" },
				{ answerText: 'Einzelunterricht', answerClass: "class-8" },
        { answerText: 'Englisch für Schüler*innen der Kursstufen ab 7. Klasse (inkl. Abitur, Mittlere Reife usw)', answerClass: "class-9" }
			],
		},
		{ id: 2,
			questionText: 'Wie haben Sie von unserem Sprachkursprogramm gehört?',
      questionTextEnglish: 'How did you hear about our language course offerings?',
      answerOptions: [

				{ answerText: 'Carl-Schurz-Haus Webseite', answerClass: "class-5"},
				{ answerText: 'Social Media (Facebook, Twitter, Instagram, LinkedIn)', answerClass: "" },
				{ answerText: 'Google', answerClass: "" },
        { answerText: 'Carl-Schurz-Haus Veranstaltung / Event', answerClass: "" },
        { answerText: 'Poster oder Flyer', answerClass: "" },
        { answerText: 'Print Ad (z.B. Zypresse, Studentenfudder)', answerClass: "" },
        { answerText: 'Carl-Schurz-Haus Newsletter', answerClass: "" },
        { answerText: 'Einzelunterricht', answerClass: "" },
        { answerText: 'von Freunden oder Bekannten / from a friend or colleague', answerClass: "" },
      ],
		},
	];
  const [index, setIndex] = useState(0);
  const {questionText,answerOptions, questionTextEnglish} = questions[index];
  const [formComplete, setFormComplete] = useState(false);
  const [classOptions, setClassOptions] = useState([]);
  const [style, setStyle] = useState("answer-btn"); 
  const classOptionsFinal = classOptions;
  console.log(classOptionsFinal);





function nextQuestion(){
  let nextQuestion = index + 1;
  if (nextQuestion < questions.length){
    setIndex(nextQuestion);
    setStyle("");
    setStyle("answer-btn-2");
  } else {
    setFormComplete(true);

}
}

function handleAnswerClass(answerClass){
  setClassOptions([answerClass + " "].concat (classOptions));
}

function handleAnswerClick(e, answerClass){
  let currentButton = e.target;
  currentButton.classList.toggle("answer-btn-click");
  handleAnswerClass(answerClass);


}



	return (
    <div className='test'>
      {formComplete ? (
         <LanguageTest courses={classOptionsFinal}/>
      ) : (
    <section className='question-container'>
					<h3>{questionText}</h3>
          <hr className='line'></hr>
          <h3>{questionTextEnglish}</h3>
              <div className='answer-section'>
  	{answerOptions.map((answerOption, index) => (
		<button id="answer-btn" key={index} onClick={(e) => handleAnswerClick(e, answerOption.answerClass)} className={style}>{answerOption.answerText}</button>
	))}
  <p>You have selected: {classOptions}</p>
  <button onClick={() => nextQuestion()} className="next-btn">Next</button>
</div>
          </section> )}
          </div>
				
			)};

      // toggle!