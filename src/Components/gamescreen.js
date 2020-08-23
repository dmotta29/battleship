import React from 'react'
import '../Styles/gamescreen.css'
import Start from './start'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Board from './board'
import {useSelector, useDispatch} from 'react-redux'

function GameScreen(){

  const name = useSelector((state)=> state.name) 

  return (
        <div>
          <h1>Now playing: {name}</h1>
          <div className = 'boards'>
            <Board/>
            <Board/>
          </div>
          <Link to = '/'>
            <button 
              className='surrender'>SURRENDER</button>
          </Link>
        </div>
  )
}

export default GameScreen