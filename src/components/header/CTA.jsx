import React from "react";
import CV from "../../assets/Sachin_pareek_resume.jpg";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="mailto:sachinpareek21874@gmail.com" className="btn btn-primary">
        Contact Me via Email
      </a>
      <a href="tel:+919928871084" className="btn btn-primary">
        Contact Me via Phone
      </a>

    </div>
  );
};

export default CTA;
