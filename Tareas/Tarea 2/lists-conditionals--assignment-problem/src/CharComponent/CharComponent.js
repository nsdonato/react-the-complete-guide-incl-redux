import React from '../../node_modules/react';

const CharComponent = (props) => {
    return (
        <p style={props.style} onClick={props.click}>{props.char}</p>
    );
}

export default CharComponent;