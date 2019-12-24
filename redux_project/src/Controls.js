import React from 'react';
import {changeAction} from './store/actions/actions';
import {connect} from 'react-redux';

const controls = (props) => {
  var check1 = false;
  var check2 = false;
  var check3 = false;
  return (
    <React.Fragment>
      <div>
      <label>
          <input className="check" onChange={() => {
            if(!check1)
              props.change(2.50);
            else 
            (props.change(-2.50))
            check1 = !check1;
          }} type="checkbox"/>
          <span>Donut $2.50</span>
        </label>

      <label>
          <input onChange={() => {
          if(!check2)
            props.change(3);
          else 
            (props.change(-3))
          check2 = !check2;

          }} type="checkbox"/>
          <span>Coffee $3.00</span>
        </label>

        <label>
          <input onChange={() =>{
            if(!check3)
              props.change(2);
            else 
              (props.change(-2))
            check3 = !check3;
          }} type="checkbox"/>
          <img src="../assets/burger.jpg"></img>
          <span>Burger $1.98</span>
        </label>
      </div>
      <button onClick={()=> console.log(props)}>ყიდვა</button>
      
    </React.Fragment>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    change: (val) => dispatch(changeAction(val))
  }
}

export default connect(null, mapDispatchToProps)(controls);