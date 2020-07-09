import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import PaperText from "../Widgets/PaperText";
import PaperImage from "../Widgets/PaperImage";

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
            <Grid item sm={6} xs={12}>
              <PaperText />
            </Grid>
            <Grid item sm={6} xs={12}>
              <PaperImage />
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default Landing;
