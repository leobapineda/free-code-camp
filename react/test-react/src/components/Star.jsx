import React from "react";
import regularStar from '../images/star-regular.svg'
import solidStar from '../images/star-solid.svg'


export default function Star({isFilled, func}) {
    return(
        <img onClick={func} style={{'width': '20px', cursor:"pointer", padding: '0'}} src={isFilled ? solidStar : regularStar} className="card--image"/>
    )
}