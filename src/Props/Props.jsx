import React, { Component } from "react";

export default class Props extends Component {
  render() {
    return (
      <div>
        <h1>Props</h1>
        <h1>Salom {this.props.name} Jurayev</h1>
        {this.props.children}
      </div>
    );
  }
}
