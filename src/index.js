import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {ContextProvider} from './Context'
import {BrowserRouter as Router, Route} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
  <ContextProvider>
  <Router>
    <Route path="/" component={App} />
  </Router>
   
  </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
