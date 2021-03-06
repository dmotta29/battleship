import React from 'react'
import '../Styles/gamescreen.css'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Board from './board'
import {useSelector, useDispatch} from 'react-redux'
import { createCpuGrid } from '../reducers/rootReducer'
import CPU from './cpu'

function GameScreen() {


  const dispatch = useDispatch()
  function onClickHandler(){
    const initialGrid = []
    initialGrid.length = 10 
    initialGrid.fill(initialGrid.slice().fill(null))
    dispatch({type: 'UPDATEGRID', payload: {userGrid: initialGrid}})
    dispatch({type: 'CPUGRID', payload: {cpuGrid: createCpuGrid()}})
    dispatch({type:'PLAYING', payload: {playing: false }})
  }

  const name = useSelector((state)=> state.currentPlayer)
  const playerName = useSelector(({name}) => name)
  const userGrid = useSelector((state)=> state.userGrid)
  const cpuGrid = useSelector((state)=> state.cpuGrid)


  return (
        <div data-testid = 'gamescreen'>
        <CPU/>  
          <h1 className='player-name'>Now playing: {name}</h1>
          <div className = 'boards'>
            <Board 
              grid={userGrid}
              player={playerName}/>
            <Board 
              grid={cpuGrid}
              player='cpu'
              />
          </div>
          <Link to ='/endgame'>
            <button
              onClick={onClickHandler} 
              className='surrender'>SURRENDER</button>
          </Link>
        </div>
        
  )
}

export default GameScreen