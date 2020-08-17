import React from 'react'
import '../Styles/ships.css'

function Ships(){
  return (
    <div>
      <h3>Place your ships on the board</h3>
        <div className='container'> 
          <div className='carrier'>Carrier</div>
          <div className='cruiser'>Cruiser</div>
          <div className='cruiser'>Cruiser</div>
          <div className='cruiser'>Cruiser</div>
          <div className='submarine'>Submarine</div>
        </div>
    </div>
  )
}

export default Ships