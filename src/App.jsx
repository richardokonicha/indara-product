import React, { Component } from "react";
import Header from "./components/Layouts/Header";
import Landing from "./components/Views/Landing";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* <Header /> */}
        <Landing />
      </div>
    );
  }
}

export default App;
