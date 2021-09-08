import React, { Component } from "react";
import light_on from "../assets/light_on.png";
import light_off from "../assets/light_off.png";
import "../Render/Rendering.css";

export default class Rendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      light: true,
      status: "full",
    };
  }
  render() {
    const onTurn = () => {
      this.setState({
        light: !this.state.light,
      });
    };

    const onFull = () => {
      this.setState({
        status: "full",
      });
    };

    const onHalf = () => {
      this.setState({
        status: "half",
      });
    };
    const onNone = () => {
      this.setState({
        status: "None",
      });
    };
    return (
      <div>
        <h1>Render</h1>
        {/* {this.state.light ? (
          <img src={light_on} alt="" />
        ) : (
          <img src={light_off} alt="" />
        )} */}
        <img
          className="img"
          src={this.state.light ? light_on : light_off}
          alt=""
        />
        <button onClick={onTurn} className="btn">
          Turn
        </button>
        <div className="msg">
          {/* Message: {this.props.newmsg <= 0 ? "" : this.props.newmsg} */}
          Message: {this.props.newmsg > 0 && this.props.newmsg}
        </div>
        <div className="cola">
          <div
            style={{ display: this.state.status === "None" ? "none" : "flex" }}
          >
            Cola price:{" "}
            {this.state.status === "full"
              ? "8000som"
              : this.state.status === "half"
              ? "4000som"
              : "1000som"}
          </div>
          <div className="btn-main">
            <button className="btn2" onClick={onFull}>
              Full
            </button>
            <button className="btn2" onClick={onHalf}>
              Half
            </button>
            <button className="btn2" onClick={onNone}>
              None
            </button>
          </div>
        </div>
      </div>
    );
  }
}
