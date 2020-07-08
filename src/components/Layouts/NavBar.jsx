import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";
// import BrightnessIcon from "@material-ui/icons/Brightness";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import Button from "@material-ui/core/Button";

function NavBar(props) {
  return (
    <List component="nav">
      <ListItem component="div" style={{ paddingLeft: 0 }}>
        <ListItemText button>
          <Button>
            <TypoGraphy color="inherit" variant="title">
              PORTFOLIO
            </TypoGraphy>
          </Button>
        </ListItemText>

        <ListItemText inset>
          <Button>
            <TypoGraphy color="inherit" variant="title">
              CONTACT ME
            </TypoGraphy>
          </Button>
        </ListItemText>

        <ListItemText inset>
          <Button>
            <TypoGraphy color="inherit" variant="title">
              RESUME
            </TypoGraphy>
          </Button>
        </ListItemText>

        <ListItemText inset>
          <Button>
            <NightsStayIcon />
          </Button>
        </ListItemText>
      </ListItem>
    </List>
  );
}

export default NavBar;
