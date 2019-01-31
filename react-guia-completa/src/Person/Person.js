import React from 'react';

const person = ( props ) => {
    return (
        ////return <p>Soy una persona and I am {Math.floor(Math.random() * 30)} years old! </p>
        <div>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;