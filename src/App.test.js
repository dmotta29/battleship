import React from 'react';
import ReactDOM from 'react-router-dom'
import App from './App'

test('renders correctly', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App/>, div)
});
