import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

class App extends Component {
  constructor(){
    super();

    this.state = {
      result: ''
    }
  }

render() {
  return (
    <div>
      <div className="calculator-body">
        <h1> Calculator </h1>
        <ResultComponent result={this.state.result}/>
        <KeyPadCompnent onClick={this.onClick}/>
      </div>
    </div>
    );
  }
}

export default App;
