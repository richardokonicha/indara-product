import React from "react";
import "./WhatIDo.scss";
import App from "./IDoAnimate.js";

export default function WhatIDo() {
  return (
    <div className="what_container">
      <div className="what_container-inner">
        <div className="what_content_right">
          {/* add a spinning wheel */}
          <App />
        </div>
        <div className="what_content_left">
          <div>
            <h2>What I do</h2>
            <p>
              I create beautiful & consistent user friendly UI driven by React
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
