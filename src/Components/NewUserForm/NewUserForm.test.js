import React from 'react'
import ReactDOM from 'react-dom'
import NewUserForm from './NewUserForm'
import { BrowserRouter } from 'react-router-dom'

it('NewUserForm Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
  <NewUserForm />
  </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);

});