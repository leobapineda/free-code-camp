import React from "react";
import iceland from '../images/iceland1.png'
import findIcon from "../icons/location-dot-solid.svg";

// stylesheet
import '../stylesheet/Card.css'

export default function Card() {
    return(
        <div className="card-container" >
            <img className="card__img" src={iceland} alt="" />
            <div className="card__info" >
                <div className="card__header" >
                    <img src={findIcon} alt="" />
                    <span className="card__country" >Japan </span>
                    <a className="card__link" href="#">View on Google Maps</a>
                </div>
                <div className="card__date" >12 Jan, 2021 - 24 Jan, 2021</div>
                <div className="card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non accusamus ipsum, facilis sapiente commodi possimus? Consequatur, dolorum adipisci atque, libero illo quas ad, veritatis porro possimus ratione neque excepturi quisquam.</div>
            </div>
        </div>
    )
}