import React from 'react';
import {connect} from 'react-redux';

const history = (props) => {
  return props.list.map((item, index) => {
      return <p key={index}>{item}</p>
  })
}

const mapStateToProps = (state) => {
  return {
    list: state.historyReducer.list
  }
}

export default connect(mapStateToProps)(history);