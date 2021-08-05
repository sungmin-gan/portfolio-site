import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css'

/*
let setStyleSheet = () => {
  let stylePath = "";
  if (window.innerWidth < 1350 || window.innerHeight < 750 && window.innerWidth < 1125) {
    stylePath = "./indexMobile.css"
  }
  else {
    stylePath = "./index.css"
  }
  import(stylePath)
}

setStyleSheet();
*/




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
