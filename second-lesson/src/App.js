import React, {Component} from 'react';
import classes from './App.module.css';
import Human from './Human';
//import mainClasses from './Main.module.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      usernames:[
        {firstName:"Temo", lastName:"Tutberidze"},
        {firstName:"Temo", lastName:"Tutberidze"},
        {firstName:"Temo", lastName:"Tutberidze"}
      ], 
      addFirstname:'',
      addLastname:''
    }
  }

  onChangeHandler = (e, index, field) => {
    const usernames = [...this.state.usernames];
    const currentObject = {
      ...usernames[index]
    }
    currentObject[field === "firstName" ? "firstName" : "lastName"] = e.target.value;
    usernames[index] = currentObject;
    this.setState({
      usernames:usernames
    })
  }

  addHumanChanged = (e, field) => {
    // if(field === 'addFirstname'){
    //   this.setState({
    //     addFirstname:e.target.value
    //   })
    // }else{
    //   this.setState({
    //     addLastname:e.target.value
    //   })
    // }
    this.setState({
      [field]:e.target.value
    })
  }

  addHuman = () => {
    const firstName = this.state.addFirstname;
    const lastName = this.state.addLastname;
    const arr = [...this.state.usernames];
    arr.push({firstName:firstName, lastName})
    this.setState({usernames:arr, addFirstname:'', addLastname:''})
  }

  render(){
    // const a = [1,2];
    // let b = [3,4];

    // a = [7,2];
    // a[0] = 7;

    // console.log(a, b);

    let styles = {
      color:'purple',
      fontSize:25
    };
    
    const humans = this.state.usernames.map((item, index) => {
      return <Human 
              key={index}
              firstName={item.firstName}
              lastName = {item.lastName}
              index={index}
              onChange={this.onChangeHandler} />
    })

    return (
      <div className={classes.App}>
        <p style={styles}>Hello</p>
        {humans}
        <div>
          <p><input type='text' 
                  placeholder='firstname'
                  value={this.state.addFirstname}
                  onChange={(e) => this.addHumanChanged(e, "addFirstname")} /></p>
          <p><input type='text' 
                  placeholder='lastname'
                  value={this.state.addLastname}
                  onChange={(e) => this.addHumanChanged(e, "addLastname")} /></p>
          <p><input onClick={this.addHuman} type='button' value='Save' /></p>
        </div>
      </div> 
    );
    // return React.createElement("div", {className:'App'}, 
    //   React.createElement("p", {}, "HELLO"));
  }
}

export default App;