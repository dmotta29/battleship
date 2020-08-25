import React from 'react'
import '../Styles/gamescreen.css'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Board from './board'
import {useSelector, useDispatch} from 'react-redux'

function GameScreen(){


  const dispatch = useDispatch()
  function onClickHandler(){
    const initialGrid = []
    initialGrid.length = 10 
    initialGrid.fill(initialGrid.slice().fill(null))
    dispatch({type: 'UPDATEGRID', payload: {grid: initialGrid}})
  }

  const name = useSelector((state)=> state.name) 

  return (
    
        <div data-testid = 'gamescreen'>
          <h1>Now playing: {name}</h1>
          <div className = 'boards'>
            <Board/>
            <Board/>
          </div>
          <Link to ='/'>
            <button
              onClick={onClickHandler} 
              className='surrender'>SURRENDER</button>
          </Link>
        </div>
        
  )
}

export default GameScreen