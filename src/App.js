import React from 'react';
import Header from './Components/header'
import Start from './Components/start'
import GameScreen from './Components/gamescreen'
import {useSelector, useDispatch} from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {

  const name = useSelector((state)=> state.name) 
  const dispatch = useDispatch()

  return (
    <Router>
      <div>
        {/*<h1>Name: {name}</h1>*/}
        <Header/>
       
      </div>
        <Switch>
          <Route exact path='/' component = {Start}/>
          <Route exact path='/gamescreen' component = {GameScreen}/>
        </Switch>
      </Router>
    );
}

export default App;
