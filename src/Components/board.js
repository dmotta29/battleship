import React from 'react'
import { useSelector } from 'react-redux'
import Cell from './cell'
import { useHistory } from 'react-router-dom'


function Board({grid, player}){
 
  
  const history = useHistory()
  const appState = useSelector(state => state)

  if (!appState.cpuLives) {
    history.push('/win', {player: appState.name})
  } else if (!appState.playerLives) {
    history.push('/win', {player: 'cpu'})
  }

  return (
    <div>
        <div className='grid-container'>
        {grid.map((row, i)=>{
          return (
        <div key= {i} className='row'>{row.map((cell, j)=> {
          
          return (<Cell 
            player={player}
            data={cell} 
            i={j} 
            j={i}
            key = {i + '' + j}/>) 
           })}
        </div>)
          })
        }
        </div>
    </div>
  )
}

export default Board