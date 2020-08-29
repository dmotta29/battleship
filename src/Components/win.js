import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'


function Win() {

    const dispatch = useDispatch()
    const reset = () => {
        dispatch({type:'RESET'})
    }

    const location = useLocation()

  return (<div >
    <h1 style={{textAlign: "center"}}>{location.state.player} win.</h1>
    <Link to ='/'>
        <button 
            onClick={reset}
            className='surrender-button'>START  SCREEN</button>
        </Link>
    </div>)
}

export default Win