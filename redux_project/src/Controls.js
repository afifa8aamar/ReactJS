import React from 'react';
import {changeAction} from './store/actions/actions';
import {connect} from 'react-redux';

const controls = (props) => {
  return (
    <React.Fragment>
      <button onClick={() => props.change(1)}>+1</button>
      <button onClick={() => props.change(-1)}>-1</button>
      <button onClick={() => props.change(5)}>+5</button>
      <button onClick={() => props.change(-5)}>-5</button>
    </React.Fragment>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    change: (val) => dispatch(changeAction(val))
  }
}

export default connect(null, mapDispatchToProps)(controls);