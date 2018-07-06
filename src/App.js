import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const p = (s) => console.log(s)

class App extends Component {
  state = {
    isOld: true,
    name: ""
  }
  // note to self: this is where we'll put all of the
  //  code we're using to test out javascript.
  greetSomeone(_name = '  blank') {
    //this.setState({name: name})
    //p("Hi, " + name)

    let x=1
    p("x is a number:")
    p(x)

    p("chrisitan is a string")
    let name="chrisitan"
    p(name)

    // Array, lists (also called 'Arrays', 'Vectors')
    let list=[]
    p("list is a list")
    p(list)

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    p("numbers is a list of numbers")
    p(numbers)

    // Object
    // also called: Maps, Hashmaps, Hashes, Dictionaries, Associative Arrays ... lookup tables ...
    let empty = {}
    p("empty is an object")
    p(empty)

    let christian = { name: "kelly", abject: "a long-winded annoying definition written by people in england." }
    p("christian is a map")
    p(christian)

    let people = [
      {name:"jose"},
      {name:"mom"}
    ]
    p("people is a list of people")
    p(people)

    // Function
    let describe = (something) => console.log("something is: ", something)
    describe(1)

    let greet = (name) => {
      console.log("Hello how are you", name)

    }
    greet(name)
    greet("Bob is a string")


    // TODO: classes (less important)
  }

  render() {

    // normal javascript
    var isOld = this.state.isOld

    var toggleOldness = () => this.setState({isOld: !isOld})

    return (
      <div className="App">
        <header className="App-header">
          click the logo to run stuff.
          <img src={logo}
            className="App-logo"
            alt="logo"
            onClick={() => this.greetSomeone("Name")} />

          <h1 className="App-title">Name: {this.state.name}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
