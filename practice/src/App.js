import React, {Component} from 'react';
import human from "./Human"
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        name:"name",
        surname: "surname"
    }
  }


  onChangeHandler = (e, field) => {
    const newUserName = [this.state.username]
    this.setState({
      [field]:e.target.value
    })
  }

  styles = {
    border: "1px solid black",
    "text-align" : "center"
  }

  render() {
    return (
      <div className = "wrapper" style={this.styles}>
        <h1>My app</h1>
        <div>{this.state.name} {this.state.surname}</div>
        <div>
          <input type="text" onChange={(e)=> this.onChangeHandler(e, "name")} value= {this.state.name} placeholder="name"/>
          <input type="text" onChange={(e)=> this.onChangeHandler(e, "surname")} value= {this.state.surname} placeholder="name"/>
        </div>
      </div>
      );
  }

}

export default App; 