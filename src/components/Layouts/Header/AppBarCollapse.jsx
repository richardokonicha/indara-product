/**
 * Code from the below medium post, only updated for latest material UI, using a
 * Menu for the popup and with breakpoints that work.
 *
 * https://medium.com/@habibmahbub/create-appbar-material-ui-responsive-like-bootstrap-1a65e8286d6f
 */
import React from "react";
import { Button, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";

const styles = (theme) => ({
  root: {
    position: "absolute",
    left: 0,
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    margin: "10px",
    paddingLeft: "16px",
    // right: 0,
    position: "relative",
    width: "100%",
    background: "transparent",
    display: "flex",
  },
  buttonBarItem: {
    [theme.breakpoints.up("md")]: {
      marginLeft: "2rem",
      marginRight: "2rem",
    },
    color: "black",
  },
});

const AppBarCollapse = (props) => (
  <div className={props.classes.root}>
    <ButtonAppBarCollapse>
      <MenuItem>PORTFOLIO</MenuItem>
      <MenuItem>CONTACT ME</MenuItem>
      <MenuItem>RESUME</MenuItem>
    </ButtonAppBarCollapse>
    <div className={props.classes.buttonBar} id="appbar-collapse">
      <Button color="inherit" className={props.classes.buttonBarItem}>
        PORTFOLIO
      </Button>
      <Button color="inherit" className={props.classes.buttonBarItem}>
        CONTACT ME
      </Button>
      <Button color="inherit" className={props.classes.buttonBarItem}>
        RESUME
      </Button>
    </div>
  </div>
);

export default withStyles(styles)(AppBarCollapse);
