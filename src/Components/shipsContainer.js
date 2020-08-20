import React from 'react'
import '../Styles/ships.css'
import { useDispatch } from 'react-redux'
import Ship from './ship'


function Ships(){

  
  return (
    <div>
      <Ship  type = 'carrier'/>
      <Ship type = 'cruiser' />      
      <Ship type = 'cruiser' />
      <Ship type = 'cruiser' />
      <Ship type = 'submarine' />
    </div>
  )
}

export default Ships