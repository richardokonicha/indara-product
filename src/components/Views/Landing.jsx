import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import makeStyles from "@material-ui/styles/makeStyles";
import PaperText from "../Widgets/PaperText";
import PaperImage from "../Widgets/PaperImage";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    marginTop: 10,
  },
  media: {
    width: "100%",
    // paddingTop: "56.25%", // 16:9
    borderRadius: "50%",
    height: "100%",
    // width: "100px",
    maxWidth: "300px",
  },
});

class Landing extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          backgroundColor: "secondary",
        }}
      >
        <Paper elevation={0}>
          <Grid
            container
            // justify="center"
            alignItems="center"
            style={{ height: "80vh" }}
          >
            <Grid item md={6} sm={12}>
              <PaperText />
            </Grid>
            <Grid item md={6} sm={12}>
              <PaperImage />
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default Landing;
