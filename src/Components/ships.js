import React from 'react'
import '../Styles/ships.css'

function Ships(){
  return (
    <div>
      <div 
      onDragStart = {() => console.log("Testing event")}
      id = 'carrier'
      draggable = 'true'
      className = 'carrier'>carrier</div>
    </div>
  )
}

export default Ships