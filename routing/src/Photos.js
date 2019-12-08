import React from 'react';
import {connect} from 'react-redux';
import {getPhotos} from './store/actions';

class Photos extends React.Component{

  state = {
    list:[],
    loading:true
  }

  componentDidMount = () => {
    const albumId = this.props.match.params.albumId;
    this.props.getData(albumId);
  }

  render(){
    console.log(this.props.albumList)
    let data = "Loading";

    if(!this.props.loadingProp){
      if(this.props.listProp.length > 0){
        data = this.props.listProp.map(item => {
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

const mapStateToProps = (state) => {
  return {
    listProp: state.photos.list,
    loadingProp: state.photos.loading,
    albumList: state.album.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (albumId) => dispatch(getPhotos(albumId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos);