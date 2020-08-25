import React from 'react';
import Header from './Components/header'
import Start from './Components/start'
import GameScreen from './Components/gamescreen'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers/rootReducer'

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
        </Switch>
      </Router>
      </Provider>
    );
}

export default App;
