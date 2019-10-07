import React from 'react';

const human = (props) => {
    return (
        <div>
          {/* <p>Username: {props.firstName +" "+ props.lastName} </p>
          <p><input onChange={(e) => props.onChange(e, props.index, "firstName" )} type='text' value={props.firstName} /></p>
          <p><input onChange={(e) => props.onChange(e, props.index, "lastName" )} type='text' value={props.lastName} /></p> */}

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
