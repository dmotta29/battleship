import React, {useState} from 'react'
import Board from './board'
import Ships from './shipsContainer'
import '../Styles/start.css'
import {useDispatch, useSelector} from 'react-redux';
import {BrowserRouter as Router, Link} from 'react-router-dom'

function Start(){

  
  const [newName, setNewName] = useState(null)

  function handleChange(event){
    setNewName(event.target.value)
  }

  const userGrid = useSelector((state)=> state.userGrid)

  const dispatch = useDispatch()

  function clickHandler(){
    dispatch({type: 'UPDATE', payload: {name: newName}})
    dispatch({type: 'UPDATE', payload: {playing: true}})
  }


    return ( 
      
      <div>
      
        <div className='container1'>
            <input 
            className ='input'
            type = 'text'
            placeholder = 'Your name'
            onChange = {handleChange}></input>
            <br/>
        <Link to ='/gamescreen'>
        <button 
            onClick = {clickHandler}
            className='button'>START GAME</button>
        </Link>
            </div>
          <div>
              <div className='container2'>
                <Ships/>
                <Board
                  grid={userGrid}
                  />  
              </div>
          
          
        </div>
        </div>
      
    )
}


export default Start