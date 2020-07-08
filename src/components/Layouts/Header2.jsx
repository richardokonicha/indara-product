import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import NavBar from "./NavBar";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    // marginRight: theme.spacing(2),
    marginRight: 20,
    marginLeft: -12,
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    willChange: "transform",
    backgroundBlendMode: "lighten",
    height: "4rem",
    boxShadow: "none",
    //   borderTop: "2px solid rgba(143,196,248,.938)",
    //   padding: "1rem"
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" className={classes.appbar}>
        <Container maxWidth={"md"}>
          <Toolbar>
            <NavBar />
            <Button>
              <Typography variant="title" color="inherit">
                konichar
              </Typography>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
