import React, {useState} from 'react'
import Board from './board'
import Ships from './shipsContainer'
import '../Styles/start.css'
import { useDispatch } from 'react-redux';

/*


*/


//onChange and DnD

function Start(){

  const [newName, setNewName] = useState(null)

  function handleChange(event){
    setNewName(event.target.value)
  }

  const dispatch = useDispatch()

  function clickHandler(){
    dispatch({type: 'UPDATE', payload: {name: newName}})
  }

 
    return (
      <div>
      
        <div className='container1'>
            <input 
            className ='input'
            type = 'text'
            placeholder = 'Your name'
            onChange = {handleChange}></input>
            <br/>
        <button 
            onClick = {clickHandler}
            className='button'>START GAME</button>
          </div>
          <div>
              <div className='flexbox'>
              
                <Ships/>
                <Board/>  
              </div>
          
          
        </div>
        </div>
    )
}


export default Start