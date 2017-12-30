import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  add = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    const { split } = this.props;
    return (
      <div>
        <p>
          {split && "Split"} Counter: {this.state.count}
        </p>
        <button onClick={this.add}>{split && "Split"} +</button>
      </div>
    );
  }
}

export default Counter;
