import React from 'react'
import './start.css'

function Start(){
    return (
        <div className='container'>
            <input 
            className ='input'
            type = 'text'
            placeholder = 'Your name'></input>
            <br/>
            <button className='button'>START GAME</button>
        </div>
    )
}

export default Start