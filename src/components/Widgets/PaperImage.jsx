import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";

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
});

function PaperImage(props) {
  const classes = useStyles();

  return (
    <div align="center" className={classes.paper}>
      <img
        className={classes.media}
        src="https://res.cloudinary.com/konichar/image/upload/v1594138774/prpfilegithu_i35wuq.png"
        alt="Image of Richard Okonicha"
        srcset=""
      />
      {/* <CardMedia src="https://res.cloudinary.com/konichar/image/upload/v1594138774/prpfilegithu_i35wuq.png"></CardMedia> */}
    </div>
  );
}

export default PaperImage;
