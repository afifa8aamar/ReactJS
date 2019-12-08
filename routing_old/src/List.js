import React from 'react';
import axios from './axios';
import {NavLink} from 'react-router-dom';

class List extends React.Component{

  state = {
    list:[],
    loading:true
  }

  componentDidMount = () => {
    this.getData();
  }

  getData = () => {
    axios.get("/albums")
      .then((response) => {
        console.log(response);
        this.setState({list:response.data, loading:false});
      })
      .catch((error) => {
        console.log(error.response);
        this.setState({loading:false})
      })
  }

  render(){

    let data = "Loading";

    if(!this.state.loading){
      if(this.state.list.length > 0){
        data = this.state.list.map(item => {
          return(
            <div key={item.id} style={{border:'1px solid #cccccc', padding:15, margin:15}}>
              <p>ID: {item.id}</p>
              <p>Title: {item.title}</p>
              <p><NavLink to={`/list/${item.id}`}>Photos</NavLink></p>
            </div>
          )
        })
      }else{
        data = "No Data Found";
      }
    }

    return data;
  }
}

export default List;