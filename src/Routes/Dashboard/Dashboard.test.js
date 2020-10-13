import React from 'react'
import ReactDOM from 'react-dom'
import Dashboard from './Dashboard'
import { BrowserRouter, Route } from 'react-router-dom'
//import NewUserForm from '../../Components/NewUserForm'


it('Dashboard Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  <Route
  component={Dashboard}
  />
  
  </BrowserRouter>,
  div);
  ReactDOM.unmountComponentAtNode(div);

});