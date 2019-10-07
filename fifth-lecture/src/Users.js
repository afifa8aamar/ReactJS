import React from 'react';

const user = (props) => {
    console.log(props);
    return (
        <div>
            <p>User ID: {props.match.params.id}</p>
            <p>Page: {props.match.params.page}</p>
        </div>
    )
}


export default user;