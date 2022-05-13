import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import { UserProviderWrapper } from "./context/user.context";
import 'animate.css';

const container = document.getElementById('root')

const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <UserProviderWrapper>
        <App />
       </UserProviderWrapper>
    </Router>
  </React.StrictMode>
);

reportWebVitals();