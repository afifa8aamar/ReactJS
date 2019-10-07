import React from 'react';
import propTypes from 'prop-types';
import Radium from 'radium';
//import classes from './Main.module.css';


const human = (props) => {
  const styles = {
    'color':'orange',
    border:'1px solid #ccc',
    width:'90%',
    margin:20,
    ':hover':{
      color:'lime',
      fontSize:'20px'
    },
    '@media(min-width: 500px)':{
      width:500
    }
  };
  if(props.index === 1){
    styles.color = 'yellow';
  }
  return (
    <div style={styles}>
      <p>Username: {props.firstName +" "+ props.lastName} </p>
      <p><input onChange={(e) => props.onChange(e, props.index, "firstName" )} type='text' value={props.firstName} /></p>
      <p><input onChange={(e) => props.onChange(e, props.index, "lastName" )} type='text' value={props.lastName} /></p>
    </div>
  )
}

human.propTypes = {
  _username: propTypes.string,
  onChange: propTypes.func.isRequired
}


export default Radium(human);