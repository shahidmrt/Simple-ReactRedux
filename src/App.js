import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {incNumber, decNumber} from "./action.js/index"
import ComA from './useContext/ComA';


function App() {

  const myState = useSelector((state)=> state.changeTheNumber)
  const dispatch = useDispatch();

  return (
    <div className="App">

      <h1>Increament/Decreament Counter</h1>
      <h4>using react redux</h4>

      <div>
        <span className='btn' title='Decreament' onClick={() => dispatch(decNumber()) } > - </span>
        <input type="text" name='quantity' value={myState} />
        <span className='btn' title='Increament' onClick={() => dispatch(incNumber(5)) } > + </span>
      </div>

         <h1> Down part is a useContext</h1>
      <ComA/>
      
    </div>
  );
}

export default App;
