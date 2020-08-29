import React, { useState } from 'react' 
import { useSelector, useDispatch } from 'react-redux'



function Cell({data, i, j, player}){
  const userGrid = useSelector((state)=> state.userGrid )
  const cpuGrid = useSelector((state)=> state.cpuGrid )
  const lives = useSelector((state) => state.cpuLives)
  const [hit, setHit] = useState(false)
  const playing = useSelector((state)=> state.playing )
  const currentPlayer = useSelector(({currentPlayer}) => currentPlayer)
  const [disabled, setDisabled] = useState(!playing || currentPlayer === 'cpu' || player !== 'cpu')
  const dispatch = useDispatch()
  const playedNumbers = useSelector(({cpuPlayedNumbers}) => cpuPlayedNumbers)

  function onDrop() {
    const nextGrid = userGrid.map(r => r.slice()).slice()

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
    e.preventDefault()
  }

  const currentShip = useSelector((state)=> state.currentShip)
  let classes = `cell`
  
  if (data) {
    if (data.destroyed) {
      classes+= ' destroyed'
    } else if (hit || (!data.missed && player !== 'cpu' && playedNumbers.includes(+(i + '' + j)))) {
      classes+= ' hit'
    } else if (data.missed) {
      classes+= ' missed'
    }

    if (data.type && player !== 'cpu') {
      classes += ' ' + data.type
    }  
  }
  
  const onClick = () => {
    let wasHit = false
    const nextGrid = cpuGrid.map(r => r.slice()).slice()
    let value = nextGrid[j][i]
    
    if (value) {
      value.lives--
      wasHit = true
      
      if (value.lives === 0) {
        value.destroyed = true
      } else {
        setHit(true)
      }
    } else {
      value = {missed: true}
      nextGrid[j][i] = value
    }
    
    dispatch({type:'UPDATEGRID', payload: {
      cpuGrid: nextGrid,
      cpuLives: lives - +wasHit,
      currentPlayer: 'cpu'
    }})

    setDisabled(true)
  }

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      onDragOver={onDragOver} 
      onDrop={onDrop}
      className={classes}
      style={{height: '30px'}}
    > </button>)
}

export default Cell