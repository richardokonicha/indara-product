import React, { Component } from "react";
import makeStyles from "@material-ui/styles/makeStyles";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@material-ui/core";

const useStyles = makeStyles( (theme) =>({
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
    maxWidth: "300px",
  },
  heading: {
    fontSize: "2.1rem",
    fontFamily: "Montserrat",
    fontWeight: "800",
  },
  headingParagraph: {
    fontSize: "0.7rem",
    fontFamily: "Montserrat",
    marginTop: "20px",
    marginBottom: "20px",
    color: "secondary"
  },
  icon: {
    fontSize: "0.8rem",
    color: "secondary",
    // marginRight: "0.7rem",
    marginRight: theme.spacing(1),
    marginTop: "0.8rem"

  },
  btn: {
    fontSize: "0.5rem",
    fontFamily: "Montserrat",
    fontWeight: "500",

  }
}));

function PaperText(props) {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.heading}>
          Hi, <br></br>I'm Richard Okonicha
        </Typography>
        <Typography
          variant="body2"
          component="p"
          className={classes.headingParagraph}
        >
          I develop modern full stack web application <br></br>Frontend & APIs
        </Typography>
        <div >
          <IconButton color="secondary" aria-label="Follow me on github">
             <GitHubIcon className={classes.icon} color="secondary"/>
          </IconButton>

          <IconButton color="secondary" aria-label="Reach me on Twitter">
          <TwitterIcon className={classes.icon} />
          </IconButton>

          <IconButton color="secondary" aria-label="Contact me on LinkedIn">
          <LinkedInIcon className={classes.icon} color="secondary"/>
          </IconButton>

          <IconButton color="secondary" aria-label="contact me on Telegram">
          <TelegramIcon className={classes.icon} color="secondary"/>
          </IconButton>
        </div>
      </CardContent>
      <CardActions>
        <Button variant="contained" disableElevation style={{ borderRadius: 0, padding: "0.6rem 1.5rem"}} size="small" endIcon={<ArrowForwardIosIcon color="secondary" style={{ fontSize: 8 }} />}>
         <Typography variant="button" display="block" color="secondary" className={classes.btn}>Explore 
        </Typography>
        </Button>
      </CardActions>
    </div>
  );
}

export default PaperText;
