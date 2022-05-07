import React from "react";

//stylesheet
import "../stylesheet/Card.css";

export default function Card({
  profileImg,
  starImg,
  rating,
  reviewCount,
  country,
  tittle,
  price,
}) {
  return (
    <div className="card__container">
      <img
        className="card__img"
        src={require(`../images/bnb${profileImg}.png`)}
        alt={profileImg}
      />
      <div className="card__rating">
        <img
          className="card__star"
          src={require(`../images/${starImg}.png`)}
          alt={starImg}
        />
        <span>{rating}</span>
        <span className="card__card__rating--gray">
          {" "}
          {`(${reviewCount})`} - {country}
        </span>
        <div className="card__text">{tittle}</div>
        <div className="card__price">
          <strong>From {`$${price}`}</strong> / person
        </div>
      </div>
    </div>
  );
}
