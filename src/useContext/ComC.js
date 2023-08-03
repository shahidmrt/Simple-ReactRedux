import React, { useContext, useState } from 'react'
import { BioData } from './ComA';

export default function ComC() {
  const [num, setNum] =useState (10);

  const increament =()=>{
    setNum(num + 5);
  }

  const decreament =()=>{
    setNum(num - 5);
  }

    const context = useContext(BioData)

  return (
    <div>
        <h2> component C page <u> {context} </u></h2>
        <h2> Using hooks</h2>
        
        <button className='btn' onClick={increament}>+</button>

        <input type="text" value={num} />

        <button className='btn' onClick={decreament}>-</button>
      
    </div>
  )
}
