import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './Components/App/App';

// This is an index file, in case you are unaware, this file contains everything in the application!

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
    
  document.getElementById('root')
);

