import React from 'react';
import Header from './Components/header'
import Start from './Components/start'
import GameScreen from './Components/gamescreen'
import {useSelector, useDispatch} from 'react-redux'


function App() {

  const name = useSelector((state)=> state.name) 
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Name: {name}</h1>
      <Header/>
      <Start/>
      <GameScreen/>
    </div>
  );
}

export default App;
