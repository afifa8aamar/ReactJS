import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import Users from './Users';
import { Route, NavLink, Switch } from 'react-router-dom';

class App extends React.Component {
  state = {
    counter: 0
  }

  updateCounter = () => {
    // let counter = this.state.counter;
    // counter ++;
    // this.setState({counter});

    this.setState((state) => {
      return {
        counter: state.counter + 1
      }
    });

  }

  render() {


    return (
      <div className="App">
        {this.state.counter}
        <ul>
          <li> <NavLink exact activeClassName="selected" activeStyle={{ fontSize: '25px' }} to="/">Home</NavLink></li>
          <li> <NavLink exact activeClassName="selected" to="/services">services</NavLink> </li>
          <li> <NavLink exact activeClassName="selected" to="/about">about</NavLink></li>
          <li> <NavLink exact activeClassName="selected" to="/users">Users</NavLink></li>

          {/* <li> <NavLink exact activeClassName="selected" to={{ 
            pathname : '/users',
            hash: '#id',
            search: '?name=something'

          }}>users</NavLink></li> */}
        </ul>
        <Switch>
          
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/users/:id/:page" component={Users} />
          <Route path="/users/:id" component={Users} />
          <Route exact path="/" render={(props) => <Home {...props} update={this.updateCounter} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
