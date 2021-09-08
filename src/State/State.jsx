import React, { Component } from "react";
import "./State.css";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      count: 0,
    };
  }
  render() {
    const decreament = () => {
      if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
    };
    const increament = () => {
      this.setState({ count: this.state.count + 1 });
    };
    const onTextChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    };
    // const onSurname = (event) => {
    //   this.setState({
    //     surname: event.target.value,
    //   });
    // };
    return (
      <div className="main">
        <h1>State</h1>
        <h2>{this.state.name}</h2>
        <div className="counter">
          <button onClick={decreament}>-</button>
          <h2 className="count">{this.state.count}</h2>
          <button onClick={increament}>+</button>
          <div className="name">
            <h1>name: {this.state.name}</h1>
            <h1>surname: {this.state.surname}</h1>
          </div>
        </div>
        <div className="input00">
          <input
            name="name"
            placeholder="Name"
            className="input01"
            onChange={onTextChange}
            type="text"
            value={this.state.name}
          />
          <input
            name="surname"
            placeholder="Surname"
            className="input01"
            onChange={onTextChange}
            type="text"
            value={this.state.surname}
          />
        </div>
      </div>
    );
  }
}
