import React from 'react'
import ReactDOM from 'react-dom'
import LoginPage from './LoginPage'
import { BrowserRouter } from 'react-router-dom'

it('LoginPage Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
  <LoginPage />
  </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);

});