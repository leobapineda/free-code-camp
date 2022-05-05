import React from "react";
import '../styles/Card.css';

function Card(props) {
  return (
    <div className="card__container">
      <div className="card__img">
        <img src={require("../img/freecodecamp-shawn.png")} alt="" />
      </div>
      <div className="card__info">
        <div className="card__name-container">
          <span className="card__name"><strong>Shawn Wang</strong> </span> in
          <span className="card__city"> Singapore</span>
        </div>
        <div className="card__company-container">
          <span className="card__job">Software Engineer</span> at
          <span className="card__company">  <strong>Amazon</strong></span>
        </div>
        <div className="card__text">
          "It's scary to change careers. I only gained confidence that I could
          code by working through the hundreds of hours of free lessons on
          freeCodeCamp. Within a year I had a six-figure job as a Software
          Engineer. freeCodeCamp changed my life."
        </div>
      </div>
    </div>
  );
}

export default Card;
