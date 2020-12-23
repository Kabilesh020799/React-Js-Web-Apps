import React, { useState } from "react";

import "./Function.css";
import One from "../../assets/icons/one.svg";
import Two from "../../assets/icons/two.svg";
import Three from "../../assets/icons/three.svg";
import Four from "../../assets/icons/four.svg";
import DotDown from "../../assets/icons/dotdown.svg";
import DotUp from "../../assets/icons/dotup.svg";

function Function() {
  const [contents, setContents] = useState([
    {
      title: "Set disbursement Instructions",
      cont:
        "Get your bloot tests delivered at home collect a sample fro the your blood tests",
    },
    {
      title: "Assembly retrieves funds from your account",
      cont:
        "Get your blood tests delivered at home collect a sample from the your blood tests.",
    },
    {
      title: "Assembly initiates disbursement",
      cont:
        "Get your blood tests delivered at home collect a sample from the your blood tests.",
    },
    {
      title: "Customer receives funds payment",
      cont:
        "Get your blood tests delivered at home collect a sample from the your blood tests.",
    },
  ]);
  return (
    <div className="function">
      <div className="function__head">Whats the function</div>
      <div className="function__head1">Let's See How It Works</div>
      <div className="numbers">
        <img src={One} alt="one" />
        <img src={DotUp} alt="dotup" />
        <img src={Two} alt="two" />
        <img src={DotDown} alt="dotdown" />
        <img src={Three} alt="three" />
        <img src={DotUp} alt="dotup" />
        <img src={Four} alt="four" />
      </div>
      <div className="function__contents">
        {contents.map((content) => (
          <div className="function_content__head">
            <div className="function_content__head1">{content.title}</div>
            <div className="function_content__head2">{content.cont}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Function;
