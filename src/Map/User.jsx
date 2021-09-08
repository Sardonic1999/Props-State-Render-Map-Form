import React, { Component } from "react";

export default class User extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>ID: {this.props.data.id}</h1>
          <h1>name: {this.props.data.name}</h1>
          <h1>status: {this.props.data.status} </h1>
        </div>
      </div>
    );
  }
}
