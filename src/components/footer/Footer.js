import React from "react";
import "./footer.css";
import { Logo } from "../../images";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__main">
        <div className="footer_left">
          <img src={Logo} alt="" />
          <h3>LOSANGELES MOUNTAINS</h3>
        </div>

        <div className="footer_right">
          <p>COPYRIGHT 2023. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
