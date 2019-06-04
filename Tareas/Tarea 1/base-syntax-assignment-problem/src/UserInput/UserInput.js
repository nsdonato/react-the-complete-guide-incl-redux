import React from "react";

const UserInput = ( props ) => {
    return(
        <input style={props.style} type="text" onChange={props.change} value={props.username} />
    );
}

export default UserInput;
