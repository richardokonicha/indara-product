import React from "react";
import "./WhatIDo.scss";
import IDoAnimate from "./IDoAnimate2.js";
import { WhatIDoText } from "../../porfolio";
import ThreeDRotationIcon from "@material-ui/icons/ThreeDRotation";
import RotateRightIcon from "@material-ui/icons/RotateRight";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";

let idoCards = [
  {
    header: "I Design",
    body: "beautiful & consistent UI driven with React",
  },

  {
    header: "I Develop",
    body: "functional business IT solution & web application",
  },
  {
    header: "I Manage",
    body: "and improve existing business solutions and infrastructure",
  },
];

export default function WhatIDo(props) {
  return (
    <div className="what_container">
      <div className="what_container-inner" style={props.align}>
        <div className="what_content_left">
          <div className="div_outside">
            <div>
              <h2>{props.text.heading}</h2>
            </div>
            <div className="div_inside">
              {idoCards.map((value, index) => {
                return (
                  <Card key={index} className="card">
                    <div>
                      {/* <CardContent> */}
                      <BusinessCenterIcon />
                      <h3>{value.header}</h3>
                      <p className="card_p">{value.body}</p>
                      {/* </CardContent> */}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
