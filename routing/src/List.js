import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAlbums} from './store/actions';

class List extends React.Component{

  componentDidMount = () => {
    this.props.getData();
  }

  render(){
    let data = "Loading";

    if(!this.props.loadingProp){
      if(this.props.listProp.length > 0){
        data = this.props.listProp.map(item => {
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

const mapStateToProps = (state) => {
  return {
    listProp: state.album.list,
    loadingProp: state.album.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getAlbums())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);