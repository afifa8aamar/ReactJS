import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.interceptors.request.use((request) => {
  console.log("Interceptors", request);
  return request;
},(error) => {
  console.log(error);
  return Promise.reject();
});

axios.interceptors.response.use(response => {
  console.log("Interceptors", response);
  return response;
},error => {
  console.log(error);
  return Promise.reject();
})

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
