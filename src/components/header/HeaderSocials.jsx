import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/sachin-pareek-692b96184/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Pareeksachin">
        <FaGithub />
      </a>
      <a href="https://www.hackerrank.com/Sachinpareek">
        <FaHackerrank />
      </a>
      <a href="https://auth.geeksforgeeks.org/user/pareeksachin99">
        <SiGeeksforgeeks />
      </a>

    </div>
  );
};

export default HeaderSocials;
