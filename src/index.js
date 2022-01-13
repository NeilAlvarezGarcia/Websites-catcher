import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootswatch/dist/superhero/bootstrap.min.css';
import { ContextApi } from './customHooks/useContextApi';

ReactDOM.render(
  <ContextApi>
    <App />
  </ContextApi>,
  document.getElementById('root')
);
