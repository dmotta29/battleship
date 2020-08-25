import React, { useState } from 'react'
import '../Styles/ships.css'
import { useDispatch } from 'react-redux'

function Ship(props){

  const [vertical, setVertical] = useState(true)

  const [visible, setVisible] = useState(true)

  const dispatch = useDispatch()

  const handleDragStart = (e) => {
    dispatch({type: 'SHIP', payload: {currentShip: {...props, vertical}}})
  }

  const handleDragEnd= () =>{
    setVisible(false)
  }

  const handleClick = () =>{
    setVertical(!vertical)
  }

  const width = !vertical ? '30px': props.slots * 30 + 'px'
  const height = vertical ? '30px': props.slots * 30 + 'px'

  return (
    <div style={{display: !visible? "none": "flex"}}>
      <div 
        onDragEnd={handleDragEnd}
        style={{width: width, height: height}}
        onDragStart = {handleDragStart}
        draggable = 'true'
        className = {props.type}></div>
        <button onClick={handleClick}>|</button>
    </div>
    
  )
}

export default Ship