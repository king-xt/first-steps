import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  state = { 
    isOld: true,
    
  }

  greet(name) {
    console.log("Hi, " + name)
  }
  render() {

    // normal javascript 
    var isOld = this.state.isOld

    var toggleOldness = () => this.setState({isOld: !isOld})

    return (
      <div className="App">
        <header className="App-header">

          <img src={logo} 
            className="App-logo" 
            alt="logo" 
            onClick={() => this.greetSomeone(prompt())} />

          <h1 className="App-title">Console greeting!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
