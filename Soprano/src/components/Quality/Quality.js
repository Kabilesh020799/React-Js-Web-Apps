import React, { useState } from "react";
import Card from "../Card/Card";

import "./Quality.css";

function Quality() {
  const [content, setContent] = useState([
    {
      star: 4,
      reviews: 392,
      title: "How to work with prototype design with adobe xd featuring tools",
      watch: 2538,
    },
    {
      star: 4,
      reviews: 392,
      title: "How to work with prototype design with adobe xd featuring tools",
      watch: 2538,
    },
    {
      star: 4,
      reviews: 392,
      title: "How to work with prototype design with adobe xd featuring tools",
      watch: 2538,
    },
  ]);
  return (
    <div className="quality">
      <div className="quality__header">Quality Features</div>
      <div className="quality__header1">Tutorials that people love most</div>
      <div className="cards">
        {content.map((con) => (
          <Card item={con} />
        ))}
      </div>
    </div>
  );
}

export default Quality;
