import React, { Component } from "../node_modules/react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    text: "texto"
  };

  textChangedHandler = event => {
    this.setState({
      text: event.target.value
    });
  };

  removeCharFromInput = (event, charIndex) => {
    const text = [...this.state.text];
    text.splice(charIndex, 1);
    this.setState({text: text.join('')});
  };

  render() {
    const styleCharComponent = {
      display: "inline-block",
      padding: "16px, text-align",
      centerMargin: "16px",
      border: "1px solid black"
    };

    return (
      <div className="App">
        <input
          onChange={event => this.textChangedHandler(event)}
          value={this.state.text}
        />
        <p>{this.state.text.length}</p>
        <ValidationComponent textLength={this.state.text.length} />

        {Array.from(this.state.text).map((element, index) => {
          return (
            <CharComponent
              style={styleCharComponent}
              click={(event) => this.removeCharFromInput(event, index)}
              char={element}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
