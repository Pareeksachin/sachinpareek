import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import {FaHackerrank} from "react-icons/fa"
import {SiGeeksforgeeks} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      {/* eslint-disable-next-line */}
      <a href="#" className="footer__logo">
        Sachin Pareek
      </a>
      <ul className="permalinks">
        <li>
          {/* eslint-disable-next-line */}
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#testimonials">Linkedin Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/sachin-pareek-692b96184/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Pareeksachin">
          <FaGithub />
        </a>
        <a href="https://twitter.com/Pareeksachin2">
          <FaTwitter />
        </a>
        <a href="https://www.hackerrank.com/Sachinpareek">
          <FaHackerrank />
        </a>
        <a href="https://auth.geeksforgeeks.org/user/pareeksachin99">
          <SiGeeksforgeeks />
        </a>
      </div> 
      <div className="footer__copyright">
        <small>&copy; Sachin Pareek. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
