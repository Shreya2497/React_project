import React from 'react';
import { Link } from 'react-router-dom';



export default function Home(props) {
  return (
    <>
    <div>
      <div className={`row g-0 bg-${props.mode} position-relative`}>
  <div className="col-md-6 mb-md-0 p-md-4">
    <img src="/images/toDo.jpg" className="w-50" alt="toDo"/>
  </div>
  <div className="col-md-6 p-4 ps-md-0">
    <h5 className="mt-0">ToDo List</h5>
    {/* <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p> */}
    <Link to="/ToDo" className="stretched-link">Add to the List</Link>
  </div>
  </div>
  <div className={`row g-0 bg-${props.mode} position-relative`}>
  <div className="col-md-6 mb-md-0 p-md-4">
    <img src="/images/qstnImg.jpg" className="w-50" alt="toDo"/>
  </div>
  <div className="col-md-6 p-4 ps-md-0">
    <h5 className="mt-0">Question</h5>
    <Link to="/Question" className="stretched-link"> See Questions</Link>
  </div>
</div>
<div className={`row g-0 bg-${props.mode} position-relative`}>
  <div className="col-md-6 mb-md-0 p-md-4">
    <img src="/images/quiz.avif" className="w-50" alt="toDo"/>
  </div>
  <div className="col-md-6 p-4 ps-md-0">
    <h5 className="mt-0">Quiz</h5>
    <Link to="/Quiz" className="stretched-link"> See Quiz</Link>
  </div>
</div>
<div className={`row g-0 bg-${props.mode} position-relative`}>
  <div className="col-md-6 mb-md-0 p-md-4">
    <img src="/images/reminder.png" className="w-50" alt="toDo"/>
  </div>
  <div className="col-md-6 p-4 ps-md-0">
    <h5 className="mt-0">Birthday Reminder</h5>
    <Link to="/Bday" className="stretched-link">Lets See birthdays</Link>
  </div>
</div>
<div className={`row g-0 bg-${props.mode} position-relative`}>
  <div className="col-md-6 mb-md-0 p-md-4">
    <img src="/images/tour.avif" className="w-50" alt="toDo"/>
  </div>
  <div className="col-md-6 p-4 ps-md-0">
    <h5 className="mt-0">All Tours</h5>
    <Link to="/AppTour" className="stretched-link">Lets See Tours</Link>
  </div>
</div>
<div className={`row g-0 bg-${props.mode} position-relative`}>
  <div className="col-md-6 mb-md-0 p-md-4">
    <img src="/images/menu.png" className="w-50" alt="toDo"/>
  </div>
  <div className="col-md-6 p-4 ps-md-0">
    <h5 className="mt-0">All Tours</h5>
    <Link to="/AppMenu" className="stretched-link">Menu Items</Link>
  </div>
</div>

    </div>
    
    </>
  )
}
