import React from 'react'
import ReactDOM from 'react-dom'
import AllExercises from './AllExercises'
import { BrowserRouter } from 'react-router-dom'

it('AllExercises Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
  <AllExercises />
  </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);

});