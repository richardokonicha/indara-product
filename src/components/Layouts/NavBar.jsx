import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";
// import BrightnessIcon from "@material-ui/icons/Brightness";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  navText: {
    fontSize: "0.65rem",
    fontFamily: "montserrat",

  }
})

function NavBar(props) {
  const classess = useStyles()
  return (
    <List component="nav" >
      <ListItem component="div" style={{ paddingLeft: 0}} >
        <ListItemText button>
          <Button>
            <TypoGraphy color="accent"  className={classess.navText} variant='overline'>
              PORTFOLIO
            </TypoGraphy>
          </Button>
        </ListItemText>

        <ListItemText inset>
          <Button>
            <TypoGraphy color="accent" className={classess.navText} variant='overline'>
              CONTACT ME
            </TypoGraphy>
          </Button>
        </ListItemText>

        <ListItemText inset>
          <Button>
            <TypoGraphy color="accent" className={classess.navText} variant='overline'>
              RESUME
            </TypoGraphy>
          </Button>
        </ListItemText>

        <ListItemText inset >
          <Button>
            <NightsStayIcon color="accent"  className={classess.navText} />
          </Button>
        </ListItemText>
      </ListItem>
    </List>
  );
}

export default NavBar;
