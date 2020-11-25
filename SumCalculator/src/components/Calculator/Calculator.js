import "./Calculator.css";

import React, { Component } from "react";

export default class componentName extends Component {
  state = {
    numbers: "",
    numArr: [],
    sum: 0,
    show: false,
  };
  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.numbers);
    let arr = this.state.numbers.split(/\s+/);
    console.log(arr);
    let sumir = 0;
    arr.map((num) => (sumir = sumir + +num));
    this.setState({ numArr: [...this.state.numArr, ...arr] });
    this.setState({ sum: sumir });
    this.setState({ show: true });
  };
  render() {
    return (
      <>
        <div className="calc">
          <form className="calc__form">
            <caption
              style={{
                fontFamily: "monospace",
                fontWeight: "bolder",
                fontSize: "20px",
              }}
            >
              Enter space seperated or line seperated numbers
            </caption>
            <textarea
              placeholder="Enter the values"
              className="calc__input"
              value={this.state.numbers}
              onChange={(event) =>
                this.setState({ numbers: event.target.value })
              }
            />
            <button onClick={this.onSubmit} className="calc__btn">
              Submit
            </button>
          </form>
        </div>
        <div className="calc__result">
          {this.state.show && (
            <div>Sum: {this.state.sum === 0 ? "" : this.state.sum}</div>
          )}
          {this.state.show && (
            <div>
              Count:{this.state.numArr ? this.state.numArr.length : ""}{" "}
            </div>
          )}
        </div>
      </>
    );
  }
}
