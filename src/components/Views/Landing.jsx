import React, { Component } from "react";
import "./Landing.css";
import { colors } from "@material-ui/core";

class Landing extends Component {
  state = {};
  box1 = {
    fontSize: "50px",
    backgroundColor: "#f3f3a5",
  };
  box2 = {
    fontSize: "50px",
    color: "red",
    backgroundColor: "#f5dadf", //#f5f3f3
  };
  box = {
    display: "flex",
    flexRowDirection: "column-reverse",
  };

  render() {
    return (
      <div style={this.box}>
        <div style={this.box1}>this is</div>
        <div style={this.box2}>this is</div>
      </div>
    );
  }
}

export default Landing;
