import React from 'react';
import axios from 'axios';

class Photos extends React.Component{

  state = {
    list:[],
    loading:true
  }

  componentDidMount = () => {
    this.getData();
  }

  getData = () => {
    const albumId = this.props.match.params.albumId;
    axios.get("/photos?albumId=" + albumId)
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
            <div key={item.id} style={{float:'left', padding:15, margin:15}}>
              <img src={item.thumbnailUrl} alt={item.title} />
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

export default Photos;