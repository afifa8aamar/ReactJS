import React from 'react';

const list = (props) => {
    return (
        <ul>
            {props.list.map((item, index) => {
            return <li key={index}>{item.title} - {item.desc}</li>
            })}
        </ul>
    )
}

export default list;