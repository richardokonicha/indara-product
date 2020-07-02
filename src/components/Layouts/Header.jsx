import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  state = {
    name: "Richard Okonicha",
  };
  render() {
    return (
      <div>
        <header>
          <h1>
            {this.state.name} <br></br>
            <span>[ Backend Developer ]</span>
          </h1>
        </header>
      </div>
    );
  }
}

export default Header;
