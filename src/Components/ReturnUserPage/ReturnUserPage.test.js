import React from 'react'
import ReactDOM from 'react-dom'
import ReturnUserPage from './ReturnUserPage'
import { BrowserRouter } from 'react-router-dom'

it('ReturnUserPage Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
  <ReturnUserPage />
  </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);

});