import React, { Component,useState } from 'react'
import Frontend from './Frontend';
import Piechart from './Piechart';
import Posts from './Posts';
import Guidance from './Guidance';

export default function App() {
	const questions = [
		{
			questionText: 'You think some websites are so cool and wonder how they built them?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: false },
				{ answerText: 'No', isCorrect: false }
			],
		},
		{
			questionText: 'Are you fascinated about the robots ?',
			answerOptions: [
				{ answerText: 'Yes999', isCorrect: false },
				{ answerText: 'No', isCorrect: false }
			],
		},
		{
			questionText: 'Choose one programming/scripting language !',
			answerOptions: [
				{ answerText: 'Html', isCorrect: false },
				{ answerText: 'Python', isCorrect: false }
			],
		},
		{
			questionText: 'Choose one programming/scripting language !',
			answerOptions: [
				{ answerText: 'Html', isCorrect: false },
				{ answerText: 'Python', isCorrect: false }
			],
		},
	];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    
    const [showFrontendDomain, setShowFrontEndDomain] = useState(false);
	const [showBackendDomain, setShowBackEndDomain] = useState(false);

	const [choiceArray, setchoiceArray] = useState([]);
	
	const [frontEnd, setfrontEnd] = useState(0);
	
	const [backEnd, setbackEnd] = useState(0);
	const [result,setresult] = useState("");
    const handleAnswerButtonClick = (answerText) =>{
		
		setchoiceArray([...choiceArray,answerText])
		console.log(choiceArray)
		
		if(choiceArray[0]=="Yes" && choiceArray[2]=="Html"){
			// console.log("front end");
			// const nextfrontend = frontEnd + 1;
			// // setfrontEnd((frontEnd) => frontEnd + 1);
			// console.log(nextfrontend);
		setresult("Front End");
		setShowFrontEndDomain(true);
		// return <Frontend/>;


		}
		
		else if(choiceArray[0]=="Yes" && choiceArray[2]=="Python"){
			// console.log("backend");
			// const nextbackend = backEnd + 1;
			// console.log(nextbackend)
			setresult("Back End");
			setShowBackEndDomain(true);
			
		}
		// else if(choiceArray[0]=="Yes" && choiceArray[2]=="Bhavana"){
		// 	console.log("front end");
		// 	nextfrontend = frontEnd + 1;
		// 	// setfrontEnd((frontEnd) => frontEnd + 1);
		// 	console.log(nextfrontend);
	
		// }
		
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        }
        else{
            // setShowDomain(true);
        }		
	}
	return (
		
		<div className='app'>
			
		
			{showFrontendDomain ?(
			// (showBackendDomain ? <Posts/> :<Guidance/>
			// ? <div><Frontend/></div>: showBackendDomain )? (
				<div><Piechart arrayProp={result}/></div>
				// <div><Posts/></div>
			
			) : (
			<div>
				{/* <h1>Take this quiz to know the domain you are interested in</h1> */}
			<div className='quiz_card_container'>
				
				<h1><span id="question_span">Question {currentQuestion+1}</span>/{questions.length}</h1>
				<div>
					<h5>{questions[currentQuestion].questionText}</h5>
					<div className='quiz_options'>
                       {questions[currentQuestion].answerOptions.map((answerOptions)=>
                        <button id="quiz_btn" onClick={()=> handleAnswerButtonClick(answerOptions.answerText)}>{answerOptions.answerText}</button>
                       )}
                   </div>
				</div>
				
			</div></div>
			)}	
		</div>
	);
}
 