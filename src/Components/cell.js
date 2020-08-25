import React from 'react' 
import { useSelector, useDispatch } from 'react-redux'


function Cell({data, grid, i, j}){

  const dispatch = useDispatch()

  const currentShip = useSelector((state)=> state.currentShip)
  const classes = `cell ${data ? data : ''}`
  
  return (
    <div
      onDragOver = {(e)=> {
        e.preventDefault()}} 
      onDrop = {(e) => {
        console.log(i + '' + j)
        const nextGrid = grid.map(r => r.slice()).slice()
        for(let k = 0; k < currentShip.slots; k++ ){
         
          if (!currentShip.vertical){
            nextGrid[j][i + k] = currentShip.type
          } else {
            nextGrid[j + k][i] = currentShip.type
          } 
        } 
      dispatch({type:'UPDATEGRID', payload: { grid: nextGrid }})
    } }
    
    className={classes}
    style = {{height: '30px'}}
    > </div>)
}

export default Cell