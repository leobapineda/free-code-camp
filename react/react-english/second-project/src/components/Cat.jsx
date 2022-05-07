import React from "react";

export default function Cat(props) {
  return (
    <div className="contacts">
      <div className="contact-card">
        <img src={props.img} alt={props.name} />
        <h3>{props.name}</h3>
        <div className="info-group">
          <img src={props.icon1} alt={props.name}/>
          <span>{props.phone}</span>
        </div>
        <div className="info-group">
          <img src={props.icon1} alt={props.name}/>
          <span>{props.email}</span>
        </div>
      </div>
    </div>
  );
}
