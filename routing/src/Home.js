import React from 'react';

const home = (props) => {
  console.log(props)
  return (
    <div>
      <p>I'm home page</p>
      <button onClick={props.update}>Increment</button>
    </div>
    
  )
}

export default home;