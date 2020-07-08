import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";
import {
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
    maxWidth: "300px",
  },
  heading: {
    fontSize: "2rem",
    fontFamily: "Montserrat",
    fontWeight: "800",
  },
  headingParagraph: {
    fontSize: "18",
    fontFamily: "Montserrat",
    marginTop: "20px",
    marginBottom: "20px",
  },
});

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
        <div>
          <GitHubIcon />
          <LinkedInIcon />
          <TelegramIcon />
          <TwitterIcon />
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Explore</Button>
      </CardActions>
    </div>
  );
}

export default PaperText;
