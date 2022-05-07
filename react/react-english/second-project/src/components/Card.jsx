import React from "react";

//stylesheet
import "../stylesheet/Card.css";

export default function Card({
  id,
  title,
  description,
  price,
  coverImg,
  rating,
  reviewCount,
  location,
  openSpots
}) {

console.log(openSpots);

  return (
    <div className="card__container">
      <img
        className="card__img"
        src={coverImg}
        alt={'coverImg'}
      />
      <div className="card__rating">
        <img
          className="card__star"
          src={require("../images/star.png")}
          alt={'star img'}
        />
        <span>{rating}</span>
        <span className="card__card__rating--gray">
          {" "}
          {`(${reviewCount})`} - {location}
        </span>
        <div className="card__text">{title}</div>
        <div className="card__price">
          <strong>From {`$${price}`}</strong> / person
        </div>
      </div>
    </div>
  );
}
