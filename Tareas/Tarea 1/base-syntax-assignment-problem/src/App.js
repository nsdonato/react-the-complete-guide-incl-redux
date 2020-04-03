import React, { Component } from "react";
import "./App.css";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
  state = {
    username: "userTest"
  };

  manipulateStateHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    const styleInput = {
        borderRadius: '10px',
        padding: '5px',
        border: '1px solid black'
    }

    return (
      <div className="App">
        <UserOutput username={this.state.username} />
        <UserOutput username="Test" />
        <UserInput style={styleInput} change={this.manipulateStateHandler} username={this.state.username}></UserInput>
      </div>
    );
  }
}

export default App;
