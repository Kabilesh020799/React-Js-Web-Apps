import React, { useState } from "react";

import "./Tutorial.css";
import Overlay from "../../assets/icons/overlay.svg";

function Tutorial() {
  return (
    <div className="tutorial">
      <img src={Overlay} alt="overlay" />
      <div className="tutorial__right">
        <div className="tutorial__right_head">free tutorial</div>
        <div className="tutorial__right_subhead">
          More than thousand of free tutorial upload every weeks
        </div>
        <div className="tutorial__right_content">
          Get your tests delivered at let home collect sample from the victory
          of the managments that supplies best design system guidelines ever.
          Get your tests delivered at let home collect sample.
        </div>
        <div className="tutorial__right_btn">Enroll Now</div>
      </div>
    </div>
  );
}

export default Tutorial;
