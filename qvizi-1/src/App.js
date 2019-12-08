import React, { Component } from 'react';
import Item from "./Item";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {  
        list : [
          { item : "Go shopping"},
          { item: "Do homework"}
        ],
        doneList : [
          {item: "Go walking"},
          {item: "Go running"},
        ],
        tempItem:""
    }
  }

  onChangeItem = (e) => {
    this.setState(
     { tempItem : e.target.value}
    )
  }

  onChangeHandler = () => {
    const items = [...this.state.list];
    const newItem = {
      item : this.state.tempItem
    }
    items.push(newItem);
    this.setState({
      list:items,
      tempItem: ""
    })
  }

  onDelete = (index) => {
    let newItems = [...this.state.list];
    newItems.splice(index,1);
    this.setState({
      list: newItems
    })
  }

  onDone = (index ) => {
    let oldItems = [...this.state.list];
    let newItem = oldItems.splice(index,1);
    let newItems = [...this.state.doneList];
    newItems.push(newItem[0]);
    this.setState({
      list: oldItems,
      doneList: newItems
    })
  }

  render() { 

    const items = this.state.list.map((item, index) => {
      return <Item 
              key={index}
              item = {item.item}
              index={index} 
              onDelete = {this.onDelete}
              onDone = {this.onDone}/>
    })


    const doneItems = this.state.doneList.map((item, index) => {
      return <Item 
              key={index}
              item = {item.item}
              index={index} />
    })


    console.log(this.state.list)
    return ( 
      <div>
        <div>
          <h1>Todo List</h1>
          {items}
          <input onChange={(e) => {this.onChangeItem(e)}} value={this.state.tempItem} type='text'/>
          <button onClick={() => {this.onChangeHandler()}}>Add</button>
        </div>
        <div>
          <h1>Done: </h1>
          {doneItems}
        </div>
      </div>
     );
  }
}
 
export default App;
