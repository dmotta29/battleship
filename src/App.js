import React from 'react';
import Header from './Components/header'
import Start from './Components/start'
import GameScreen from './Components/gamescreen'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers/rootReducer'
import endGame from './Components/surrender';
import win from './Components/win'

const store = createStore(rootReducer)


function App({label}) {


  return (
    <Provider store={store}>
    <Router>
      <div 
        label = 'correct'
        data-testid='App'>
        {/*<h1>Name: {name}</h1>*/} 
        <Header/>
       
      </div>
        <Switch>
          <Route exact path ='/' component = {Start}/>
          <Route exact path ='/gamescreen' component = {GameScreen}/>
          <Route exact path ='/endgame' component = {endGame}/>
          <Route exact path ='/win' component = {win}/>
        </Switch>
      </Router>
      </Provider>
    );
}

export default App;
