import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Services from './Services';
import Users from './Users';
import {Route, NavLink, Switch} from 'react-router-dom';

class App extends React.Component {
  state = {
    counter:0
  }

  updateCounter = () => {
    // let counter = this.state.counter;
    // counter++;
    // this.setState({counter:counter});

    this.setState((state) => {
      return {
        counter:state.counter + 1
      }
    });
  }

  render(){
    return (
      <div className="App">
        {this.state.counter}
        <ul>
          <li><NavLink 
            exact 
            activeClassName='selected' 
            activeStyle={{
              fontSize:25
            }}
            to="/"
            >Home</NavLink></li>
          <li><NavLink activeClassName='selected' to="/services">Services</NavLink></li>
          <li><NavLink activeClassName='selected' to="/about">About</NavLink></li>
          <li><NavLink activeClassName='selected' to='/users/5'>Users</NavLink></li>
        </ul>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/users/:id/:page" component={Users} />
          <Route path="/users/:id" component={Users} />
          <Route path="/" render={(props) => <Home {...props} update={this.updateCounter} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
