import React, { useState } from 'react'
import People from './People'
import List from './List'
import  '../CSS/Bday.css'

export default function Bday() {

    const[people,setPeople]=useState(People)
	// this should clear all records
	
	function clearAllRecords() {
		setPeople([])
	}
  return (
    <main>
			<section className="container">
				{/* change this to state variable data */}
				<h3>{[].length} birthdays today</h3>
				<List people={people} />
				<button onClick={clearAllRecords}>Clear All</button>
			</section>
		</main>
  )
}
