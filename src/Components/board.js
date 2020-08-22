import React, { useState } from 'react'
import '../Styles/board.css'
import Ships from './shipsContainer'
import { useSelector } from 'react-redux'

function Board(){
  const initialGrid = []
  initialGrid.length = 10
  const [grid, setGrid] = useState(initialGrid.fill(initialGrid.slice().fill(null)))

  const currentShip = useSelector((state)=> state.currentShip)

  return (
    <div>
        <div className='grid-container'>
        {grid.map((row, i)=>{
          return (
        <div key= {i} className='row'>{row.map((cell, j)=> {
          const classes = `cell ${cell ? cell : ''}`
          return (<div
            onDragOver = {(e)=> {
              e.preventDefault()}} 
            onDrop = {(e) => {
              const nextGrid = grid.map(r => r.slice()).slice()
              for(let k = 0; k < currentShip.slots; k++ ){
                nextGrid[i][j + k] = currentShip.type
              }
              setGrid(nextGrid)
            } }
            key = {i + '' + j}
            className={classes}
            style = {{height: '30px'}}
            > </div>)})}
        </div>)
          })
        }  
        
        </div>

     </div>
  )
}

export default Board