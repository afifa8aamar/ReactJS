import React from 'react';
import {connect} from 'react-redux';

const display = (props) => {
  if(props.propsCounter == 0)
  return (
    <div>არ არის არჩეული</div>
  )
  return (
    <div>{props.propsCounter}</div>
  )
}

const mapStateToProps = (state) => {
  return {
    propsCounter: state.counterReducer.counter
  }
}

export default connect(mapStateToProps, null)(display);