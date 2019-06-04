import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Noe", age: 32 },
      { name: "Gabu", age: 29 },
      { name: "Nany", age: 33 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  switchNameHanlder = (newName) => {
    // No hay que mutar de esta manera (cambiar de estado), va a dar un error.
    // NO HAY QUE HACER  ESTO: this.state.persons[0].name = 'Noelia';
    this.setState({
      persons: [
<<<<<<< HEAD
        { name: newName, age: 32 },
        { name: "Gabuns", age: 29 },
        { name: "Nanys", age: 33 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 }
=======
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
>>>>>>> 18d46ddb738b84ff0659b52c903b63e04b8925e5
      ]
    })
  }

<<<<<<< HEAD
  togglePersonHanlder = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursos: "pointer"
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />

          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHanlder.bind(this, 'Maximiliam!!' )}
            changed={this.nameChangeHandler}>My hobbies: Racing </Person>

          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hola, soy una App React</h1>
        <p>Esto realmente funciona!!</p>
        <button 
          style={style} 
          onClick={this.togglePersonHanlder}>Toggle Person</button>
          {persons}
      </div>
    );
     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
=======


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
>>>>>>> 18d46ddb738b84ff0659b52c903b63e04b8925e5
  }
}

export default App;
