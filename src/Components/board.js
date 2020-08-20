import React from 'react'
import '../Styles/board.css'

function Board(){
  return (
    <div>
      <div 
      onDragOver = {(e)=> e.preventDefault()}
      onDrop = {()=> console.log('Testing onDrop event')}
      className ='board'>Board</div>
    </div>
  )
}

export default Board