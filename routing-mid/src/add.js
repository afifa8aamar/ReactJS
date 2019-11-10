import React from 'react';

const add = (props) => {
    console.log(props);
    return (
        <div>
            <p>Add Item: 
                <input onChange={(e) => {props.onChange(e)}} value={props.tempItem} type='text'></input>
                <button onClick={() => props.add()}>Add</button>
            </p>
        </div>
    )
}


export default add;