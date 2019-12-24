import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, NavLink, Switch} from 'react-router-dom';
import History from './history';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <h1>მთავარი გვერდი</h1>
        <ul>
          <li><NavLink to="/">მთავარი</NavLink></li>
          <li><NavLink to="/history">ისტორია</NavLink></li>
        </ul>
        <Switch>
          <Route path="/history" component={History} />
          <Route path="/" component={() => <h1>მთავარი გვერდი</h1>} />
        </Switch>
      </div>
    )
  }
}

export default App;
