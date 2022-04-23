import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
// import { UserProviderWrapper } from "./context/user.context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <UserProviderWrapper> */}
        <App />
      {/* </UserProviderWrapper> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();