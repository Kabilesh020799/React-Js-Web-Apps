import React from "react";
import Button from "../Button/Button";

import "./Navigation.css";
import Saprona from "./../../assets/icons/soprano.svg";
function Navigation() {
  return (
    <div className="nav">
      <img src={Saprona} className="nav__list1" />
      <div className="nav__list2">
        <div className="nav__ele">Home</div>
        <div className="nav__ele">Consumer</div>
        <div className="nav__ele">Enterprise</div>
        <div className="nav__ele">Live Stream</div>
        <div className="nav__ele">Soprano U</div>
        <div className="nav__ele">Services</div>
        <div className="nav__ele">Sign Up</div>
      </div>
      <div className="nav__list3">
        <Button
          name="Login"
          color="#ef6666"
          bgColor="white"
          hoverColor="#fccccc"
        />
        <Button
          name="Get Started"
          color="#ef6666"
          bgColor="white"
          hoverColor="#fccccc"
        />
      </div>
    </div>
  );
}

export default Navigation;
