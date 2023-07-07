import React from "react";
import "./Portfolio.css";
import Project from "./Project";

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio-container'>
        <Project />
      </div>
    </section>
  );
};

export default Portfolio;
