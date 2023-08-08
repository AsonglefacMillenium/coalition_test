import React from "react";
import "./footer.css";
import { Logo } from "../../images";

const Footer = () => {
  return (
    <section class="footer">
      <div class="footer__main">
        <div class="footer_left">
          <img src={Logo} alt="" />
          <h3>LOSANGELES MOUNTAINS</h3>
        </div>

        <div class="footer_right">
          <p>COPYRIGHT 2023. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
