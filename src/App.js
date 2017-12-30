import React, { Component } from "react";
import logo from "./logo.svg";
import Bundle from "./Bundle";
import Counter from './Counter';
import "./App.css";

import { hot } from "react-hot-loader";

const SplitCounter = props => (
  <Bundle load={() => import("./Counter")}>
    {Counter => (Counter ? <Counter {...props} /> : "loading")}
  </Bundle>
);

class App extends Component {
  state = {
    count: 1
  };
  addCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit<code>src/App.js</code> and save to reload.
        </p>
        <Counter />
        <SplitCounter split />
      </div>
    );
  }
}

export default hot(module)(App);
