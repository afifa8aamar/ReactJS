import React from 'react';
import './App.css';
import List from './List';
import Photos from './Photos';
import {Route, NavLink, Switch} from 'react-router-dom';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/list">Albums</NavLink></li>
        </ul>
        <Switch>
          <Route path="/list/:albumId" component={Photos} />
          <Route path="/list" component={List} />
          <Route path="/" component={() => <p>This is Home Page</p>} />
        </Switch>
      </div>
    )
  }
}

export default App;
