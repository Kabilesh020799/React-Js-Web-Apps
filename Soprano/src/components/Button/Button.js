import React, { useEffect, useState } from "react";

import "./Button.css";

function Button({ name, color, bgColor, hoverColor }) {
  const [hover, setHover] = useState(false);
  const [style, setStyle] = useState(null);
  useEffect(() => {
    if (!hover) {
      setStyle({ backgroundColor: bgColor, color: color });
    } else {
      setStyle({ backgroundColor: hoverColor, color: color });
    }
  }, [hover]);
  const toggleHover = () => {
    setHover(!hover);
  };
  return (
    <div
      className="button"
      style={style}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      {name}
    </div>
  );
}

export default Button;
