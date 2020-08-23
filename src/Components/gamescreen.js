import React from 'react'
import '../Styles/gamescreen.css'
import Start from './start'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Board from './board'

function GameScreen(){

  return (
        <div>
        
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