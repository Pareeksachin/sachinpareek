import React from "react";
import "./about.css";
import profile_picture from "../../assets/portfolio_profile1.png";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profile_picture} alt="About Sachin Pareek" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
          
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
                PG-Diploma in Big Data Analytics(CDAC) <br />
                Grade : A <br />
              </small>
              <small>
                B.Tech(Computer Science Engineering)<br />
                Marks : 79.72%<br />
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                5+ Completed
                <br />
                and Counting
              </small>
            </article>
          </div>
          <p>
            I am a passionate and driven individual with a keen interest in the 
            dynamic world of data analytics and technology. My academic journey 
            has equipped me with a strong foundation in a range of essential 
            modules, making me a versatile and well-rounded professional in the 
            field.
          </p>
          <p>
            Recently I have completed my PG-Diploma in Big Data Analytics from 
            CDAC-Acts(Center for development of advance Computing), a well known
            Institute gave me a opportunity to learn some advance skills in (Data 
            Visualization,Python , R , Database management, Advance Analytics and 
            Machine learning)
          </p>
          <p>
            I have participated in many tech events in which I was the
          <h4>Winner of Facebook Developer Circle </h4>  
          <h4>Top 5 in Google Dev fest</h4>
          <h4>Participation in TEQ-III</h4>
          <h4>TFWS scholarship</h4>
          </p>
          <p>
          Playing cricket makes me more Energetic
          </p>
          <a href="mailto:sachinpareek21874@gmail.com" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
