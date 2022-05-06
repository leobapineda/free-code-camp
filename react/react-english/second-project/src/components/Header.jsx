import React from "react";
import reactLogo from "../img/logo192.png";

function Header() {
  return (
    <header className="header">
      <img className="header__img" src={reactLogo} alt="react logo" />
      <ul className="nav-list">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}

export default Header