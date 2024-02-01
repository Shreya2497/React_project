import './App.css';
import About from './components/About';
import NavBar from './components/NavBar'
import TextUtils from './components/TextUtil';
import React, { useState } from 'react'
import Alert from './components/Alert';
import Home from './components/Home';
import SingleQuestion from './components/Question';
import data from './components/data';
import Bday from './components/Bday';
import AppTour from './components/AppTour';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ToDo from './components/ToDo';
import Quiz from './components/Quiz';
import AppMenu from './components/AppMenu';


function App() {

  const [alert,setAlert]=useState(null)
  const [mode,setMode]=useState("light")


  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="grey"
      showAlert("light mode enabled","success")  
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("Dark mode enabled","success")  
    }
  }
  

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    
   <>
   <Router>
   <NavBar title="TextIT" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
   <Routes>
      <Route path="/About" element={<About showAlert={showAlert}/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/ToDo" element={<ToDo/>}/>
      <Route path="/Quiz" element={<Quiz/>}/>
      <Route path="/Bday" element={<Bday/>}/>
      <Route path="/TextUtils" element={<TextUtils title="Enter your text here" mode={mode}/>} />
    <Route path="/Question" element={<div className="container1" >
				<h3>FAQ</h3>
				<section className="info">
					{data.map((question) => {
						return (
							<SingleQuestion
								title={question.title}
								info={question.info}
								key={question.id}
							/>
						)
					})}
				</section>
			</div>}/>
      <Route path="/AppTour" element={<AppTour/>}/>
      <Route path="/AppMenu" element={<AppMenu/>}/>
      </Routes>
      </Router>
   </>

  );
}

export default App;

