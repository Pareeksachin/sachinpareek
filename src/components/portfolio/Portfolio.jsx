import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/brights-lite.png";
import IMG2 from "../../assets/otodom_analysis.png";
import IMG3 from "../../assets/AQI_tracker.JPG";
import IMG4 from "../../assets/propser_loan.jpg";
import IMG5 from "../../assets/temp.png";
import IMG6 from "../../assets/stock_market.jpg";

const data = [
  {
    id: 1, 
    image: IMG1,
    title: "Multiple Disease Prediction",
    github: "https://github.com/Pareeksachin/Multiple_Disease_Prediction",

    brief:
      "https://github.com/Pareeksachin/Multiple_Disease_Prediction/blob/master/README.md",
  },
  {
    id: 2,
    image: IMG2,
    title: "SQL Data Anlytics Project",
    github: "https://github.com/Pareeksachin/Otodom_Data_Analysis",

    brief: "https://github.com/Pareeksachin/Otodom_Data_Analysis/blob/master/README.md",
  },
  {
    id: 3,
    image: IMG3,
    title: "AQI Tracker",
    github: "https://github.com/Pareeksachin/AQI-Tracker",

    brief:
      "https://github.com/Pareeksachin/AQI-Tracker",
  },
  {
    id: 4,
    image: IMG4,
    title: "Prosper Loan Data Analysis",
    github: "https://github.com/Pareeksachin/Prosper_loan",

    brief: "https://github.com/Pareeksachin/Prosper_loan/blob/master/README.md",
  },
  {
    id: 5,
    image: IMG5,
    title: "Indian-Major-City-Temperature-Data-Analysis",
    github: "https://github.com/Pareeksachin/Indian-Major-City-Temperature-Data-Analysis/",
  
    brief: "https://github.com/Pareeksachin/Indian-Major-City-Temperature-Data-Analysis/blob/master/README.md",
  },
  {
    id: 6,
    image: IMG6,
    title: "Stock Market Data Analysis",
    github: "https://github.com/Pareeksachin/Stock-Market-Analysis",
    
    brief: "https://github.com/Pareeksachin/Stock-Market-Analysis/blob/master/README.md",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
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
                  Github
                </a>
                <a href={brief} className="btn">
                  Project Brief
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

export default Portfolio;
