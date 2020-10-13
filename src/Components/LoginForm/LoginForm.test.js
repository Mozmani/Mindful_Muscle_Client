import React from 'react'
import ReactDOM from 'react-dom'
import Loginform from './Loginform'
import { BrowserRouter } from 'react-router-dom'

it('Loginform Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
  <Loginform />
  </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);

});