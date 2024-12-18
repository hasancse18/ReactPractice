import React from 'react'
import { useState } from 'react'
import "./Count.css"
const Count = () => {
   /**
     * Challenge: 
     * Create state to track our count value (initial value is 0)
     * Don't forget to replace the hard-coded "0" with your new state
     */
    const [value,setValue]= useState(0)
    function Minus()
    {
       setValue(prev=>{
       return prev-1
       })
    }
    function Plus()
    {
       setValue(prev=> prev+1)
    }
   return (
    <main className="container">
        <h1>How many times will Bob say "state" in this section?</h1>
        <div className="counter">
            <button className="minus" aria-label="Decrease count" onClick={Minus}>–</button>
            <h2 className="count">{value}</h2>
            <button className="plus" aria-label="Increase count" onClick={Plus}>+</button>
        </div>
    </main>
)
}

export default Count
