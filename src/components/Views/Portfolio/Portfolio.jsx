import React from "react";
// import "./Full.css";
import "./Portfolio.css";
import PaperImage from "../../Widgets/PaperImage";
import PaperText from "../../Widgets/PaperText";
import shoot from "./shooting.css";

export default function Meet() {
  return (
    // <c-wiz view>
    <div className="Port-main" jsname="a9kxte">
      <div className="Heigh" />
      <div className="Port-main__scaler">
        <div className="Port-main__container">
          <div className="Port-main__container_text">
            <PaperText />
          </div>
          <div className="C9bDzc">
            {/* <div className="LSNDte VdLOD yUoCvf fXx9Lc SL65ee"> */}
            {/* <img
                  className="se63he"
                  src="//www.gstatic.com/meet/google_meet_marketing_ongoing_meeting_grid_427cbb32d746b1d0133b898b50115e96.jpg"
                  alt="Image of people in a meeting on Google Meet"
                ></img> */}
            <PaperImage className="se63he" />
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="night">
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
      </div>
    </div>
    // </c-wiz>
  );
}
