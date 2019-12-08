import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
//import axios from 'axios';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import AlbumsReducer from './store/albumReducer';
import PhotosReducer from './store/photosReducer';
import thunk from 'redux-thunk';

//axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
// axios.interceptors.request.use((request) => {
//   console.log("Interceptors", request);
//   return request;
// },(error) => {
//   console.log(error);
//   return Promise.reject();
// });

// axios.interceptors.response.use(response => {
//   console.log("Interceptors", response);
//   return response;
// },error => {
//   console.log(error);
//   return Promise.reject();
// })

const Reducer = combineReducers({
  album: AlbumsReducer,
  photos: PhotosReducer
})

const myStore = createStore(Reducer, applyMiddleware(thunk));

ReactDOM.render(
<BrowserRouter>
  <Provider store={myStore}>
    <App />
  </Provider>
</BrowserRouter>, document.getElementById('root'));
serviceWorker.unregister();
