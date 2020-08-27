import React from 'react'
import '../Styles/ships.css'
import { useDispatch } from 'react-redux'
import Ship from './ship'


function Ships(){

  
  return (
    <div className='ships-container'>
      <p>Carrier</p>
      <Ship 
        slots = {4}
        type = 'carrier'/>
        <p>Cruiser</p>
      <Ship 
        slots = {3}
        type = 'cruiser' />      
      <Ship 
        slots = {3}
        type = 'cruiser' />
      <Ship 
        slots = {3}
        type = 'cruiser' />
      <p>Submarine</p>
        <Ship
        slots = {2}
        type = 'submarine' />
    </div>
  )
}

export default Ships