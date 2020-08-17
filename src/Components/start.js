import React from 'react'
import '../Styles/start.css'
import Ships from './ships'

function grid(x, y){
    var grid = [];
    
    for(let i=1; i<=y; i++){
      var row = [];
      for(let j=1; j<=x; j++){
      row.push(j)
    }
    grid.push(row)
    }
    return grid;
  }
  

function Start(){
    return (
        <div className='container'>
            <input 
            className ='input'
            type = 'text'
            placeholder = 'Your name'></input>
            <br/>
            <button className='button'>START GAME</button>
            <div className='grid-container'>
            {grid(10,10).map((row)=>{
              return (
                <div clasName='row'>{row.map(cell=> {
                  return (<div className='cell'>{cell}</div>)})}
                </div>)
              })
            }  
          </div>
        
        </div>
    )
}

export default Start