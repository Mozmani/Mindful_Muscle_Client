import React from 'react'
import ReactDOM from 'react-dom'
import Homepage from './Homepage'
import { BrowserRouter } from 'react-router-dom'

it('Homepage Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
  <Homepage />
  </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);

});