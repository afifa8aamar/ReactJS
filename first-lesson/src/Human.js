import React from 'react';

const Human = (props) => {
    return(
        <div>
            Hi, i'm {props.name} , i'm {props.age} years old!
            {props.children}
        </div>
    )
}
export const human2 = () => {
    return(
        <div>
            Hi, i'm human 2
        </div>
    )
}

export default Human;