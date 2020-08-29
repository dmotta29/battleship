import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function Surrender(){

    const dispatch = useDispatch()
    const reset = () =>{
        dispatch({type:'RESET'})
    }


  return (<div >
    <h1 style = {{textAlign: "center"}}>You surrendered.</h1>
    <Link to ='/'>
        <button 
            onClick={reset}
            className='surrender-button'>START SCREEN</button>
        </Link>
    </div>)
}

export default Surrender