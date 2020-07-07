import React, { Component } from "react";
// import Header from "./components/Layouts/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Header } from "./components/Layouts";
import Landing from "./components/Views/Landing";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Landing />
      </React.Fragment>
    );
  }
}

export default App;
