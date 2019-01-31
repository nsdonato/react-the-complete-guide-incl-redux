import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
        { name: 'Noe', age: 32 },
        { name: 'Gabu', age: 29 },
        { name: 'Nany', age: 33 },
    ]
  }

  switchNameHanlder = (newName) => {
    // No hay que mutar de esta manera (cambiar de estado), va a dar un error.
    // NO HAY QUE HACER  ESTO: this.state.persons[0].name = 'Noelia';
    this.setState({
      persons: [
          { name: newName, age: 32 },
          { name: 'Gabuns', age: 29 },
          { name: 'Nanys', age: 33 },
        ]
      })
  }

  switchNameHanlder = (event) => {
    this.setState({
      persons: [
        { name: newName, age: 32 },
        { name: 'Gabuns', age: 29 },
        { name: 'Nanys', age: 33 },
      ]
    })
  }



  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHanlder('Noe!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHanlder.bind(this, 'Max!')}>
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
      );    
  }
}

export default App;
