import React, { useState } from "react";

import "./Features.css";
import Right from "../../assets/icons/rightarrow.svg";
import Left from "../../assets/icons/leftarrow.svg";
import Button from "./../Button/Button";

function Features() {
  const [items, setItems] = useState([
    "Marketing",
    "E-commerce",
    "UX Design",
    "UI Design",
    "Course Creator",
    "App Creator",
  ]);
  const [count, setCount] = useState(0);

  return (
    <div className="features">
      <div className="features__header">
        <div className="features__header1">Quality features</div>
        <div className="features__header2">Popular Design Course</div>
      </div>
      <div className="features__body">
        <img src={Left} alt="left" />
        <div className="features__bodyBtn">
          {items.map((i, ind) => (
            <Button
              name={i}
              color="black"
              bgColor="#C4C4C4"
              hoverColor="#E20000"
            />
          ))}
        </div>
        <img src={Right} alt="right" />
      </div>
      <div className="features__bodyContent"></div>
      <button className="btn">Enroll Now</button>
    </div>
  );
}

export default Features;
