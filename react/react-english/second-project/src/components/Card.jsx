import React from "react";
import bnb1 from "../images/bnb1.png";
import star from "../images/star.png";

//stylesheet
import "../stylesheet/Card.css";

export default function Card() {
  return (
    <div className="card__container">
      <img className="card__img" src={bnb1} alt="bnb 1" />
      <div className="card__rating">
        <img className="card__star" src={star} alt="" />
        <span>5.0</span>
        <span className="card__card__rating--gray"> (6) - USA</span>
        <div className="card__text">Life lesson with Katie Zaferes</div>
        <div className="card__price">
        <strong>From $136</strong> / person
        </div>
      </div>
    </div>
  );
}
