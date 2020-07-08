import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";
// import BrightnessIcon from "@material-ui/icons/Brightness";
import NightsStayIcon from "@material-ui/icons/NightsStay";

function NavBar(props) {
  return (
    <List component="nav">
      <ListItem component="div">
        <ListItemText inset>
          <TypoGraphy color="inherit" variant="title">
            PORTFOLIO
          </TypoGraphy>
        </ListItemText>

        <ListItemText inset>
          <TypoGraphy color="inherit" variant="title">
            CONTACT ME
          </TypoGraphy>
        </ListItemText>

        <ListItemText inset>
          <TypoGraphy color="inherit" variant="title">
            RESUME
          </TypoGraphy>
        </ListItemText>
        <ListItemText inset>
          <NightsStayIcon />
        </ListItemText>
      </ListItem>
    </List>
  );
}

export default NavBar;
