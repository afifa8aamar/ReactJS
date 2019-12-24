import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import CounterReducer from './store/reducers/counter';
import HistoryReducer from './store/reducers/history';
import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';

const reducers = combineReducers({
  counterReducer: CounterReducer,
  historyReducer: HistoryReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const loggerMiddleware = (store) => {
  return (next) => {
    return (actions) => {
      console.log(store.getState(), actions);
      // actions["currentVal"] = 
      //   store.getState().counterReducer.counter
      return next(actions);
    }
  }
}

const reduxStore = 
  createStore(reducers, composeEnhancers(applyMiddleware(loggerMiddleware, thunk)));

ReactDOM.render(<BrowserRouter><Provider store={reduxStore}><App /></Provider></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
