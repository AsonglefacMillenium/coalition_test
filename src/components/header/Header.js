import React, { useState } from "react";
import "./header.css";
import { Logo } from "../../images";
const Header = () => {
  const [headerChange, setHeaderchange] = useState(false);

  const changeHeaderColor = () => {
    if (window.scrollY >= 10) {
      setHeaderchange(true);
    } else {
      setHeaderchange(false);
    }
  };
  window.addEventListener("scroll", changeHeaderColor);

  return (
    <div className={headerChange ? "headerChange" : "header_wrapper"}>
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
    </div>
  );
};

export default Header;
