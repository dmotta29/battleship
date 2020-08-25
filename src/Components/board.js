import React, { useState } from 'react'
import Ships from './shipsContainer'
import { useSelector } from 'react-redux'
import Cell from './cell'


function Board(){
 
  const grid = useSelector((state)=> state.grid)

  const currentShip = useSelector((state)=> state.currentShip)

  return (
    <div>
        <div className='grid-container'>
        {grid.map((row, i)=>{
          return (
        <div key= {i} className='row'>{row.map((cell, j)=> {
          
          return (<Cell 
            data={cell} 
            grid={grid} 
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