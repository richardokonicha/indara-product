import React from "react";
import "./WhatIDo.scss";

export default function WhatIDo() {
  return (
    <div className="what_container">
      <div className="what_container-inner">
        <div className="what_content_right">
          {/* add a spinning wheel */}
          <p>Beautiful & Consistant UI powered with React</p>
          <div className="spinner"></div>
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
