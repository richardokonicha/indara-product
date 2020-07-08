import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NavBar from "./NavBar";

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
    //   borderTop: "2px solid rgba(143,196,248,.938)",
    //   padding: "1rem"
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary" className={classes.appbar}>
        <Toolbar>
          <Typography variant="title" color="inherit">
            konichar
          </Typography>
          <NavBar />
        </Toolbar>
      </AppBar>
    </div>
  );
}
