import React, { Component,useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
			questionText: 'Would you like to work on visual aspects of a work?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: false },
				{ answerText: 'No', isCorrect: false }
			],
		},
		{
			questionText: 'Are u a start to finish mode type?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: false },
				{ answerText: 'No', isCorrect: false }
			],
		},
		{
			questionText: ' Are you more into aesthetic sense of the work?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: false },
				{ answerText: 'No', isCorrect: false }
			],
		},
		{
			questionText: 'How would you like to start your work?',
			answerOptions: [
				{ answerText: 'Informational site', isCorrect: false },
				{ answerText: 'Membership', isCorrect: false },
				{ answerText: 'Online store', isCorrect: false }
			],
		},
		{
			questionText: 'You are more drawn towards?',
			answerOptions: [
				{ answerText: 'Topograpy', isCorrect: false },
				{ answerText: 'Navigations & positioning', isCorrect: false },
				{ answerText: 'Data organization', isCorrect: false },
			],
		},
		{
			questionText: 'Are you more of which type thinker?',
			answerOptions: [
				{ answerText: 'Analytical,Logical', isCorrect: false },
				{ answerText: 'Innovative,Deciplined', isCorrect: false },
				{ answerText: 'Creative,Artistic', isCorrect: false },
			],
		},
		{
			questionText: 'Which mode of learning do you prefer?',
			answerOptions: [
				{ answerText: 'Book', isCorrect: false },
				{ answerText: 'Videos', isCorrect: false },
				{ answerText: 'Websites,blogs,e-copies', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the tools you had an idea or heard about?',
			answerOptions: [
			
				{ answerText: 'Html', isCorrect: false },
				{ answerText: 'Java', isCorrect: false },
				{ answerText: 'Both', isCorrect: false },
				
			],
		},
		{
			questionText: 'You are interested in learning new technologies?',
			answerOptions: [
				{ answerText: 'Highly interested', isCorrect: false },
				{ answerText: 'Moderate', isCorrect: false },
				{ answerText: 'Not at all', isCorrect: false },
			],
		},
		{
			questionText: 'Giving up if error persists?',
			answerOptions: [
				{ answerText: 'Not at all', isCorrect: false },
				{ answerText: 'May be', isCorrect: false },
				{ answerText: 'Yes', isCorrect: false },
			],
		},
		{
			questionText: 'Maintaining steady pace through out the task?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: false },
				{ answerText: 'May be', isCorrect: false },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: ' Do you need regular monitoring?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: false },
				{ answerText: 'Slightly', isCorrect: false },
				{ answerText: 'Not needed', isCorrect: false },
			],
		},
		{
			questionText: 'Do u prefer working in teams?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: false },
				{ answerText: 'Sometimes', isCorrect: false },
				{ answerText: 'No', isCorrect: false },
			],
		},
	];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    
    const [showFrontendDomain, setShowFrontEndDomain] = useState(false);
	const [showBackendDomain, setShowBackEndDomain] = useState(false);

	const [showDomain,setShowDomain] = useState(false);
	const [choiceArray, setchoiceArray] = useState([]);
	
	const [frontEnd, setfrontEnd] = useState(0);
	
	const [backEnd, setbackEnd] = useState(0);
	const [result,setresult] = useState("");

	const navigate = useNavigate();
    const handleAnswerButtonClick = (answerText) =>{
		
		setchoiceArray([...choiceArray,answerText])
		console.log(choiceArray)
		
		if(choiceArray[0]=="Yes" && choiceArray[1]=="Yes" && choiceArray[2]=="Yes" && choiceArray[3]=="Yes" && choiceArray[6]=="Creative,Artistic" && choiceArray[8]=="Html" && choiceArray[9]=="Highly interested" && choiceArray[10]=="Not at all" && choiceArray[11]=="Yes"  && choiceArray[12]=="Yes"  && choiceArray[13]=="Yes"){
			navigate('/Frontend');
		}
		else if(choiceArray[0]=="Yes" && choiceArray[1]=="Yes" && choiceArray[2]=="Yes" && choiceArray[3]=="Yes" && choiceArray[6]=="Innovative,Deciplined" && choiceArray[8]=="Both" &&  choiceArray[13]=="Yes"){
			navigate('/Fullstack2');
			
		}
		else if(choiceArray[5]=="Data organization" && choiceArray[6]=="Analytical,Logical" && choiceArray[8]=="Java" && choiceArray[9]=="Highly interested" && choiceArray[13]=="Yes"){
			navigate('/Backend');
			
		}
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        }
        else{

        }		
	}
	return (
		
		<div className='app'>
			
		
			{/* { setShowDomain ?(
				<div><Frontend/></div>

			) : (  */}
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
			{/* ) */}
				
		</div>
	);
}
 