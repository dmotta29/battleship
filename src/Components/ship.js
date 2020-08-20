import React from 'react'
import '../Styles/ships.css'
import { useDispatch } from 'react-redux'

function Ship(props){

  const dispatch = useDispatch()

  const handleDragStart = (e) => {
    dispatch({type: 'SHIP', payload: {currentShip: e.currentTarget }})
  }


  return (
    <div>
      <div 
      onDragStart = {handleDragStart}
      draggable = 'true'
      className = {props.type}></div>
    </div>
  )
}

export default Ship