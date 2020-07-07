import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
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

function PaperText(props) {
  const classes = useStyles();
  return (
    <Card className={classes.paper}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Hi, <br></br>I'm Richard Okonicha
        </Typography>

        <Typography variant="body2" component="p">
          I develop modern full stack web application Frontend & APIs
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Explore</Button>
      </CardActions>
    </Card>
  );
}

function PaperImage(props) {
  const classes = useStyles();

  return (
    <Card align="center">
      <img
        className={classes.media}
        src="https://res.cloudinary.com/konichar/image/upload/v1594138774/prpfilegithu_i35wuq.png"
        alt=""
        srcset=""
      />
      {/* <CardMedia src="https://res.cloudinary.com/konichar/image/upload/v1594138774/prpfilegithu_i35wuq.png"></CardMedia> */}
    </Card>
  );
}

class Landing extends Component {
  state = {};

  //   useStyles = makeStyles((theme) => ({
  //     contain: {
  //       marginTop: 20,
  //       padding: 50,
  //     },
  //   }));
  //   classess = this.useStyles();
  render() {
    return (
      <div
        // className={this.classess.contain}
        style={{
          marginTop: 20,
          padding: 30,
          backgroundColor: "secondary",
        }}
      >
        <Grid container justify="center">
          <Grid item md={6} sm={12}>
            <PaperText />
          </Grid>
          <Grid item md={6} sm={12}>
            <PaperImage />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Landing;

// <Card>
//   <CardActionArea>
//     <CardMedia
//       component="img"
//       alt="Contemplative Reptile"
//       //   height="10"
//       image="https://www.andreasreiterer.at/wp-content/uploads/2017/08/cropped-2017-07-04_165158-2-Bearbeitetweb.jpg.webp"
//       title="Contemplative Reptile"
//     />
//     <CardContent>
//       <Typography gutterBottom variant="h5" component="h2">
//         the tel
//       </Typography>
//       <Typography component="p">yep</Typography>
//     </CardContent>
//   </CardActionArea>
//   <CardActions>
//     <Button size="small" color="primary">
//       Share
//     </Button>
//     <Button size="small" color="primary">
//       Learn More
//     </Button>
//   </CardActions>
// </Card>;
