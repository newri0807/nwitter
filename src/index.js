import React from 'react';
import ReactDOM from 'react-dom'
import App from 'components/App';
import fbase from 'fbase';
import { auth } from "fbase";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
