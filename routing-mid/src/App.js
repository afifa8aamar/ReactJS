import React from 'react';
import './App.css';
import Show from './show';
import Add from './add';
import { Route, NavLink, Switch } from 'react-router-dom';

class App extends React.Component  {
  state = {
    list: [],
    tempItem: "",
    

  }

  addToList = () => {
   const items = [...this.state.list]
    items.push(this.state.tempItem);
    this.setState({
      list : items
    })
  }

  showList = () => {
    return this.state.list
  }

  onChangeItem = (e) => {
    this.setState(
      { tempItem : e.target.value}
     )
  }

  render() {
    return (
      <div className="App">
        {this.state.counter}
        <ul>
          <li> <NavLink exact activeClassName="selected" activeStyle={{ fontSize: '25px' }} to="/">Home</NavLink></li>
          <li> <NavLink exact activeClassName="selected" to="/add">add</NavLink> </li>
          <li> <NavLink exact activeClassName="selected" to="/show">show</NavLink></li>
        </ul>
        <Switch>
          <Route path="/add"  render={(props) => <Add {...props} add={this.addToList} onChange={this.onChangeItem} /> } />
          <Route path="/show" render={(props) => <Show {...props} list={this.state.list} /> } />
        </Switch>
      </div>
    );
  }
}
export default App;
