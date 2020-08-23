import React, {useState} from 'react'
import Board from './board'
import Ships from './shipsContainer'
import '../Styles/start.css'
import { useDispatch } from 'react-redux';
import {BrowserRouter as Router, Link} from 'react-router-dom'


function Start(){
  
  const [newName, setNewName] = useState(null)

  function handleChange(event){
    setNewName(event.target.value)
  }

  const dispatch = useDispatch()

  function clickHandler(){
    dispatch({type: 'UPDATE', payload: {name: newName}})
  }


    return (
     <Link> 
      <div>
      
        <div className='container1'>
            <input 
            className ='input'
            type = 'text'
            placeholder = 'Your name'
            onChange = {handleChange}></input>
            <br/>
        <Link to = '/gamescreen'>
        <button 
            onClick = {clickHandler}
            className='button'>START GAME</button>
        </Link>
            </div>
          <div>
              <div className='flexbox'>
              
                <Ships/>
                <Board/>  
              </div>
          
          
        </div>
        </div>
        </Link>
    )
}


export default Start