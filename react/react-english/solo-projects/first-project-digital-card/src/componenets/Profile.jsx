import React from "react";
import profilePicture from "../images/perfil.jpg";

export default function Perfil() {
  return (
    <div className="profile-container">
      <img src={profilePicture} alt="" />
      <h3>Leo Pineda</h3>
      <p>FrontEnd Developer</p>
      <p>leobardo.com.mx</p>
    </div>
  );
}
