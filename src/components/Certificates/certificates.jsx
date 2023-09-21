import React from "react";
import "./certificates.css";
import IMG1 from "../../assets/Nasccom.jpg";
import IMG2 from "../../assets/CiscoPCAP.jpg";
import IMG3 from "../../assets/DataScience_coursera.jpg";
import IMG4 from "../../assets/LinkedinC++.jpg";
import IMG5 from "../../assets/TEQIP-lll.jpg";
import IMG6 from "../../assets/PG-DBDA_CDAC.jpg";

const data = [
  {
    id: 1, 
    image: IMG1,
    title: "Basics of AI",
    github: "https://drive.google.com/file/d/1KX66CGI_9Ztv9-Zj27bLRz5HYwPQNC_5/view?usp=sharing",

    brief:
      "https://github.com/Pareeksachin/Multiple_Disease_Prediction/blob/master/README.md",
  },
  {
    id: 2,
    image: IMG2,
    title: "PCAP : Programming Essential in Python",
    github: "https://drive.google.com/file/d/19-MkZN1tIYNRAQy5iXfh4S84Vu4rTLmr/view?usp=sharing",

    brief: "https://github.com/Pareeksachin/Otodom_Data_Analysis/blob/master/README.md",
  },
  {
    id: 3,
    image: IMG3,
    title: "Python for Data Science",
    github: "https://drive.google.com/file/d/1Z4i53ohQ2Xx7ebsALzPqsLQIY4HJRf8s/view?usp=sharing",

    brief:
      "https://github.com/Pareeksachin/AQI-Tracker",
  },
  {
    id: 4,
    image: IMG4,
    title: "Fundamentals in C++",
    github: "https://drive.google.com/file/d/16QsHZ5DjTdsQS38E6aWD8Bs_ewWyVrh2/view?usp=sharing",

    brief: "https://github.com/Pareeksachin/Prosper_loan/blob/master/README.md",
  },
  {
    id: 5,
    image: IMG5,
    title: "TEQIP-lll",
    github: "https://drive.google.com/file/d/1chsKRxhC919_z6RefjLlHFNproIfREil/view?usp=sharing",
  
    brief: "https://github.com/Pareeksachin/Indian-Major-City-Temperature-Data-Analysis/blob/master/README.md",
  },
  {
    id: 6,
    image: IMG6,
    title: "CDAC Certificate & other Marksheet",
    github: "https://drive.google.com/file/d/1Pohk38u5157u71N6jOfP5AlNFdGkwR9O/view?usp=sharing",
    
    brief: "https://github.com/Pareeksachin/Stock-Market-Analysis/blob/master/README.md",
  },
];

const Certificates = () => {
  return (
    <section id="portfolio">
      <h5>Certifications & Achievements</h5>
      <h2>Certificates </h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, brief }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  View Certificate
                </a>
              </div>
              <div className="portfolio__item-cta">
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Certificates;
