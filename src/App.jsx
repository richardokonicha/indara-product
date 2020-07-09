import React, { Component } from "react";
// import Header from "./components/Layouts/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Header } from "./components/Layouts";
import Landing from "./components/Views/Landing";
import Container from "@material-ui/core/Container";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

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
      main: "#949090"
    }
  },
});

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Header />
          <Container maxWidth={"md"} style={{ padding: 0 }}>
            <Landing />
          </Container>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
