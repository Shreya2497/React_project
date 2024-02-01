import React, { useState } from 'react'
// import '../CSS/Question.css'

const Question = (props) => {
	const { title, info } = props
	// add a state variable here
const [show,setShow]=useState('+');
const [expand,isExp]=useState('true')


    function showInfo(){
        if(show==='+'){
            setShow('-')
            isExp('false')
           
        }else{
        setShow('+');
        isExp('true')
        }
       
    }
	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				{/* make this toggle functionality onClick */}
				<button className="btn5" onClick={showInfo} value={expand}>{show}</button>
			</header>
			{/* make this render conditionally */}
            {expand === 'true' ? null : <p>{info}</p>}

		</article>
	)
}

export default Question
