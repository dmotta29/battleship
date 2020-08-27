import React, { useState } from 'react' 
import { useSelector, useDispatch } from 'react-redux'


function Cell({data, grid, i, j, player}){
  const [hit, setHit] = useState(false)

  const playing = useSelector((state)=> state.playing )

  const [disabled, setDisabled] = useState(!playing)

  const dispatch = useDispatch()

  function onDrop() {
    const nextGrid = grid.map(r => r.slice()).slice()
    for(let k = 0; k < currentShip.slots; k++ ){
     
      if (!currentShip.vertical){
        nextGrid[j][i + k] = currentShip
      } else {
        nextGrid[j + k][i] = currentShip
      } 
    } 

    dispatch({type:'UPDATEGRID', payload: { userGrid: nextGrid }})
  } 

   const onDragOver = (e)=> {
    e.preventDefault()}

  const currentShip = useSelector((state)=> state.currentShip)
  let classes = `cell`
  
  if(data){
    if(data.destroyed){
      classes+= ' destroyed'
    } else if(hit){
      classes+= ' hit'
    } else if(data.missed){
      classes+= ' missed'
    }

    if(data.type && player !== 'cpu'){
      classes += ' ' + data.type
    }
  }
  
  const onClick = () =>{
    
     
    setDisabled(true)
    const nextGrid = grid.map(r => r.slice()).slice()
    let value=nextGrid[j][i]
    if(value){
      value.lives--
      if(value.lives === 0){
        value.destroyed = true
      } else{
        setHit(true)
      }
    } else{
      value = {missed: true}
    }
    nextGrid[j][i] = value
    if(player === 'cpu'){
      dispatch({type:'CPUGRID', payload: { cpuGrid: nextGrid }})
    } else{
      dispatch({type:'UPDATEGRID', payload: { userGrid: nextGrid }})
    }
  }


  return (
    <button
      disabled={disabled}
      onClick={onClick}
      onDragOver = {onDragOver} 
      onDrop = {onDrop}
    
    className={classes}
    style = {{height: '30px'}}
    > </button>)
}

export default Cell