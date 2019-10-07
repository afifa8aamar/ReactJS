import React from 'react';

const human = (props) => {
    return (
        <div>
          <div>
              Name: {props.name} +" " + Surname: {props.surname}
          </div>
          <div>
              <input type="text" onChange={(e)=> props.onChange(e, "name")} value= {props.name} placeholder="name"/>
              <input type="text" onChange= {(e)=> props.onChange(e, "surname")} value= {props.surname} placeholder="surname"/>
          </div>
        </div>
      )
}

export default human;
