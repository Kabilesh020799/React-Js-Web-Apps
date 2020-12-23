import React from "react";

import "./Core.css";

import Box1 from "../../assets/icons/box1.svg";
import Box2 from "../../assets/icons/box2.svg";
import Box3 from "../../assets/icons/box3.svg";
import Box4 from "../../assets/icons/box4.svg";

function Core() {
  return (
    <div className="core">
      <div className="circle"></div>
      <div className="core__box">
        <div className="core__box1">
          <img src={Box1} alt="box1" />
          <img src={Box2} alt="box2" />
        </div>
        <div className="core__box2">
          <img src={Box3} alt="box3" />
          <img src={Box4} alt="box4" />
        </div>
      </div>
      <div className="core__content">
        <div className="content__head">Core features</div>
        <div className="content__center">
          Smart Jackpots that you may love this anytime anywhere
        </div>
        <div className="content__footer">
          Get your tests delivered at let home collect sample from the victory
          of the managments that supplies best design system guidelines ever.
          Get your tests delivered at let home collect sample.
        </div>
        <div className="content__btn">Enroll Now</div>
      </div>
    </div>
  );
}

export default Core;
