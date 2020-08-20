import React from 'react'
import '../Styles/board.css'
import Ships from './shipsContainer'
import { useSelector } from 'react-redux'

function grid(x, y){
  var grid = [];
  
  for(let i=1; i<=y; i++){
    var row = [];
    for(let j=1; j<=x; j++){
    row.push(j)
  }
  grid.push(row)
  }
  return grid;
}


function Board(){

  return (
    <div>
        <div className='grid-container'>
        {grid(10,10).map((row)=>{
          return (
        <div className='row'>{row.map(cell=> {
          return (<div className='cell'>{cell}</div>)})}
        </div>)
          })
        }  
        
        </div>

     </div>
  )
}

export default Board