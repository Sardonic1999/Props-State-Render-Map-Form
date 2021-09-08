import React, { Component } from "react";
import "../Form/Form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
    };
  }
  render() {
    const onEmail = (e) => {
      this.setState({ email: e.target.value });
    };
    const onUsername = (e) => {
      this.setState({ username: e.target.value });
    };
    const onPassword = (e) => {
      this.setState({ password: e.target.value });
    };
    const onSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
    };
    return (
      <div>
        <form
          onSubmit={onSubmit}
          className="form"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <input onChange={onEmail} className="input" placeholder="email" />
          <input
            onChange={onUsername}
            className="input"
            placeholder="username"
          />
          <input
            onChange={onPassword}
            className="input"
            placeholder="password"
            type="password"
          />
          <input className="input" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
