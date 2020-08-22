import React from 'react'
import '../Styles/ships.css'
import { useDispatch } from 'react-redux'
import Ship from './ship'


function Ships(){

  
  return (
    <div>
      <Ship 
        slots = {4}
        type = 'carrier'/>
      <Ship 
        slots = {3}
        type = 'cruiser' />      
      <Ship 
        slots = {3}
        type = 'cruiser' />
      <Ship 
        slots = {3}
        type = 'cruiser' />
      <Ship
        slots = {2}
        type = 'submarine' />
    </div>
  )
}

export default Ships