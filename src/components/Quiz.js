import React, { useState } from 'react'
// import '../CSS/quiz.css'

export default function Quiz() {
	// Define a state variable here to track question status
	const [currentIndex, setCurrentIndex] = useState(0)
   
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	]

	function handleAnswerClick(val) {
		// Check if correct answer is pressed. (See the hint on the left)
       let newI=currentIndex+1;
       
		if (newI === questions.length) {
			// quiz over
			setQuizFinished(true)
            if(val === true){
				let newScore=1;
				let newScore2=newScore+score;
                console.log(newScore2)
				setScore(newScore2)
			}
           
		} else {
           
			if(val === true){
				let newScore=1;
				let newScore2=newScore+score;
                console.log(newScore2)
				setScore(newScore2)
			}
			setCurrentIndex((value) => value + 1)
			
		}
	}

	const [quizFinished, setQuizFinished] = useState(false)

	// Create a state variable here [score, setScore]
	const [score, setScore] = useState(0)

	return (
		<div className="app">
			{quizFinished ? (
				/* Change this hardcoded 1 to state variable score else */
				<div className="score-section">
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className="question-section">
						<div className="question-count">
							<span>Questions 1</span>/{questions.length}
						</div>
						<div className="question-text">
							{questions[currentIndex].questionText}
						</div>
					</div>
					<div className="answer-section">
						{questions[currentIndex].answerOptions.map((answer) => {
							// Add onClick listener to this button
							return (
								<button
									onClick={()=>{handleAnswerClick(answer.isCorrect)}}
									key={answer.answerText}
								>
									{answer.answerText}
								</button>
							)
						})}
					</div>
				</>
			)}
		</div>
	)
}
