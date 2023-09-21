import React from "react";
import "./header.css";
import CTA from "./CTA";
import header_picture from "../../assets/profile-pic2.png";
import HeaderSocials from "./HeaderSocials";

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sachin Pareek</h1>
        <h5 className="text-light">Data Driven Engineer</h5>
        <CTA />
        <HeaderSocials />
        <div className="ademir">
          <img src={header_picture} alt="Sachin Pareek" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down ---- Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
