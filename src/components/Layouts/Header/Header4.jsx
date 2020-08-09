import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AppBarCollapse from "./AppBarCollapse";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  roott: {
    position: "absolute",
    right: 0,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navigation: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: 100,
      paddingRight: 100,
    },
    backgroundColor: "transparent",
    boxShadow: "None",
  },
  toggleDrawer: {},
  appTitle: {
    color: "black",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    fontSize: "1.5rem",
    fontWeight: "600",
    fontFamily: "monseratt",
  },
});

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <AppBar position="" className={classes.navigation}>
      <Toolbar>
        <AppBarCollapse />
        <div className={classes.grow}></div>
        {/* <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h2" color="inherit" className={classes.appTitle}>
          konichar
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
