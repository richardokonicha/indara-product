import React, { Component } from "react";
import makeStyles from "@material-ui/styles/makeStyles";
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
    padding: 30,
    // marginTop: 10,
  },
  media: {
    width: "100%",
    // paddingTop: "56.25%", // 16:9
    borderRadius: "50%",
    height: "100%",
    // width: "100px",
    maxWidth: "200px",
  },
});

function PaperImage(props) {
  const classes = useStyles();

  return (
    <div align="end" className={classes.paper}>
      <img
        className={classes.media}
        src="https://res.cloudinary.com/konichar/image/upload/v1594138774/prpfilegithu_i35wuq.png"
        alt=""
        srcset=""
      />
      {/* <CardMedia src="https://res.cloudinary.com/konichar/image/upload/v1594138774/prpfilegithu_i35wuq.png"></CardMedia> */}
    </div>
  );
}

export default PaperImage;
