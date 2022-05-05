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
          <span className="card__name"><strong>{props.name}</strong> </span> in
          <span className="card__city"> {props.city}</span>
        </div>
        <div className="card__company-container">
          <span className="card__job">{props.job}</span> at
          <span className="card__company">  <strong>{props.company}</strong></span>
        </div>
        <div className="card__text">
        {props.text}
        </div>
      </div>
    </div>
  );
}

export default Card;
