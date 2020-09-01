import React from "react";
import "./Tools.scss";
import IDoAnimate from "./IDoAnimate2.js";
import { WhatIDoText } from "../../porfolio";
import ThreeDRotationIcon from "@material-ui/icons/ThreeDRotation";
import RotateRightIcon from "@material-ui/icons/RotateRight";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";

let toolCards = [
  {
    header: "Languages",
    body: ["Python", "Javascript", "Bash", "SQL", "Typescript"],
  },

  {
    header: "Database",
    body: ["MongoDB", "Postgres", "Sqlite", "CouchDB"],
  },
  {
    header: "Libraries & Frameworks",
    body: ["Reactjs", "Vuejs", "Flask", "Django", "Bootstrap", "Material UI"],
  },
  {
    header: "Cloud",
    body: ["Microsoft Azure", "Heroku", "Google cloud", "Netlify"],
  },
];

export default function WhatIDo(props) {
  return (
    <div className="tools">
      <h2 className="tool-header">Tools</h2>
      <div className="div_inside">
        {toolCards.map((value, index) => {
          return (
            <Card key={index} className="card">
              <div>
                <h2 className="card_h">{value.header}</h2>
                <ul className="card_p">
                  {value.body.map((value, index) => {
                    return <li>{value}</li>;
                  })}
                </ul>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
