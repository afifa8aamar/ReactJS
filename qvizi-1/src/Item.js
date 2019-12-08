import React from 'react';

const item = (props) => {

  return (
    <div >
       <p>{props.item}</p>
       <button onClick={() => props.onDelete(props.index)}>remove</button>
       <button onClick={() => props.onDone(props.index)}>done</button>
    </div>
  )
}


export default item;