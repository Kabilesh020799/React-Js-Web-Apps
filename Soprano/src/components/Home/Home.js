import React from "react";

import "./Home.css";
import Star from "./../../assets/icons/star.svg";
import Line from "./../../assets/icons/line.svg";
import Search from "../../assets/icons/search.svg";
import Apple from "../../assets/icons/apple.svg";
import Android from "../../assets/icons/android.svg";
import AppleTv from "../../assets/icons/appletv.svg";
import Roku from "../../assets/icons/roku.svg";
import Amazon from "../../assets/icons/amazon.svg";

function Home() {
  return (
    <div className="home">
      <div className="home__head">
        <img src={Star} className="home__headStar" alt="star" />
        <div className="home__headTitle"> Trusted by over 4332 students</div>
      </div>
      <div className="home__body1">
        Learn Design <br /> with Smile
        <img src={Line} alt="line" />
      </div>
      <div className="home__body2">
        Get your blood tests delivered at let home collect sample from the
        victory of the managments that supplies best design system guidelines
        ever.
      </div>
      <div className="home__input">
        <input className="home__inputField" />
        <div className="home__inputContent">
          <span>Search Course Name</span>
          <img src={Search} />
        </div>
      </div>
      <div className="home__footer">
        <span className="footer__text">Create apps for:</span>
        <img src={Apple} />
        <img src={Android} />
        <img src={Roku} />
        <img src={AppleTv} />
        <img src={Amazon} />
      </div>
    </div>
  );
}

export default Home;
