import React from 'react';
import './App.css';
import Display from './Display';
import Controls from './Controls';
import History from './history';
import {Route, NavLink, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{display:"flex",}}>
      <div>
        <Switch>
          <Route path="/history" component={History} />
          <Route path="/" component={() => 
          <div>
            <h1>მთავარი გვერდი</h1>
            <Display />
            <Controls />
          </div>} />
        </Switch>
        </div>

      <div>
      <ul>
          <li><NavLink to="/">მთავარი გვერდი</NavLink></li>
          <li><NavLink to="/history">ისტორია</NavLink></li>
      </ul>
      </div>

    </div>
  );
}

export default App;
