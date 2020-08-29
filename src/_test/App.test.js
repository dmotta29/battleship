import React from 'react'
import ReactDOM from 'react-dom'
import App from './../App'
import render from '@testing-library/react'
import '@testing-library/jest-dom'

it('renders correctly', ()=>{
  const {getByTestId} = render (<App label = 'correct'/>)
  expect (getByTestId('App')).toHaveTextContent('correct')
})