import React from "react";

export default function Cat({img, name, icon1, phone, email}){
  return (
    <div className="contacts">
      <div className="contact-card">
        <img src={img} alt={name} />
        <h3>{name}</h3>
        <div className="info-group">
          <img src={icon1} alt={name}/>
          <span>{phone}</span>
        </div>
        <div className="info-group">
          <img src={icon1} alt={name}/>
          <span>{email}</span>
        </div>
      </div>
    </div>
  );
}
