import React, { useState } from "react";
import "../style/Box.css";

export default function Box({ on, id, handleClick }) {
  const [onProperty, setOnProperty] = useState(on);

  function handleClick() {
    setOnProperty((onProperty) => !onProperty);
  }

  const personalStyles = {
    backgroundColor: onProperty ? "#222222" : "#cccccc",
  };

  return (
    <div onClick={handleClick} style={personalStyles} className="box"></div>
  );
}
