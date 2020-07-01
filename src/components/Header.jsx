import React, { Component } from "react";
import "./static/css/Header.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <header>
          <h1>
            Richard Okonicha <br></br>
            <span>[ Backend Developer ]</span>
          </h1>
        </header>
      </div>
    );
  }
}

export default Header;
