import React from "react";
import "./header.css";
import { Logo } from "../../images";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="" />
        <h3>LOSANGELES MOUNTAINS</h3>
      </div>

      <nav className="nav">
        <a href="#history">01. history </a>
        <a href="#schedule">02. team</a>
      </nav>
    </div>
  );
};

export default Header;
