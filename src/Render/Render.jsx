import React, { Component } from "react";
import "../Render/style.css";
import Props from "../Props/Props";
import State from "../State/State";
import Rendering from "../Render/Rendering";
import "../Render/Rendering.css";
import "../Render/Render.css";
import Map from "../Map/Map";
import Form from "../Form/Form";

export default class Render extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLog: false,
      isActive: "Props",
    };
  }
  render() {
    const change = (name) => {
      this.setState({ isActive: name });
      // this.setState({isLog: !this.state.isLog})
    };
    return (
      <div>
        <div className="container">
          <div
            onClick={() => change("Props")}
            className={this.state.isActive === "Props" ? "tab" : "item"}
          >
            Props
          </div>
          <div
            onClick={() => change("State")}
            className={this.state.isActive === "State" ? "tab" : "item"}
          >
            State
          </div>
          <div
            onClick={() => change("Render")}
            className={this.state.isActive === "Render" ? "tab" : "item"}
          >
            Render
          </div>
          <div
            onClick={() => change("Map")}
            className={this.state.isActive === "Map" ? "tab" : "item"}
          >
            Map
          </div>
          <div
            onClick={() => change("Form")}
            className={this.state.isActive === "Form" ? "tab" : "item"}
          >
            Form
          </div>
        </div>
        {/* <h3>{this.state.isActive}</h3> */}
        {this.state.isActive === "Props" && <Props name="Tonny" /> && (
          <Props>
            {" "}
            <div> some text</div>
          </Props>
        )}
        {this.state.isActive === "State" && <State />}
        {this.state.isActive === "Render" && <Rendering newmsg={0} />}
        {this.state.isActive === "Map" && <Map />}
        {this.state.isActive === "Form" && <Form />}
      </div>
    );
  }
}
