import React from 'react';

const show = (props) => {
    const listItems = props.list.map((item) =>
    <li> {item}</li>
  );
    console.log(props);
    return (
        <ul>{listItems}</ul>     
    )
}


export default show;