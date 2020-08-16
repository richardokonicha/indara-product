import React, { Component } from "react";
import Header from "./components/Layouts/Header/Header4";
import CssBaseline from "@material-ui/core/CssBaseline";
// import { Header } from "./components/Layouts";
// import Landing from "./components/Views/Landing";
import Container from "@material-ui/core/Container";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Portfolio from "./components/Views/Portfolio/Portfolio";
// import SectionOne from "./components/Views/SectionOne";
import SectionPort from "./components/Views/SectionPort";
import Main from "./containers/Main.js";

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#FFFFFF",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#4E342E",
    },
    accent: {
      main: "#949090",
    },
  },
});

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* <CssBaseline /> */}
        {/* <ThemeProvider theme={theme}> */}
        {/* <Header /> */}
        {/* <Portfolio /> */}
        <Header />
        <SectionPort />
        <Main />

        <div style={{ height: "40vh", background: "red" }}>this is me</div>

        {/* <Container maxWidth={"md"} style={{ padding: 0, backgroundColor:'red' }}>
            <Landing style={{ backgroundColor:'red' }}/>
          </Container> */}
        {/* </ThemeProvider> */}
      </React.Fragment>
    );
  }
}

export default App;
