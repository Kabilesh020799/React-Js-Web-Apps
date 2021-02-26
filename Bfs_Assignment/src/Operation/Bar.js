import React from "react";
import "./Bar.css";

function Bar({ item }) {
  return (
    <div
      style={{
        fontWeight: "bold",
        fontSize: "20px",
        textAlign: "center",
      }}
    >
      <div className="bar" style={{ height: `${(item.value / 100) * 400}px` }}>
        <div className="bar__inner">{item.label}</div>
      </div>
      {item.value}%
    </div>
  );
}

export default Bar;
