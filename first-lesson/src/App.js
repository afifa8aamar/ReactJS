import React, { Component } from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Human  , { human2 as Human2 }from './Human';


function App() {
  return (
    <div className="App">
      <p>Hello</p>
      <Human name = "afi" age="21"/>
      <Human2/>
    </div>
  );
}


// class App extends Component() {

//   render() {
//     return (
//       <div className="App">
//         <p>Hello</p>
//         <Human/>
//       </div>
//     );
//   }
// }


// return React.createElement("div", {className:'App'}, 
// React.createElement("p", {}, "HELLO"));

export default App;
