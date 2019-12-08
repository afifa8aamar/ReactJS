import React from 'react';

const users = (props) => {
  return (
    <div>
      <p>User ID: {props.match.params.id}</p>
      <p>User Page: {props.match.params.page}</p>
      <button onClick={() => {
        if(parseInt(props.match.params.id) === 15){
          props.history.push("/services")
        }
      }}>push</button>
    </div>
    
  )
}

export default users;