import React from "react";
import "./Experience.css";
import {
  ExperienceDetailsBackend,
  ExperienceDetailsFrontend,
} from "./ExperienceDetails";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Spells I Own</h5>
      <h2>My Experience</h2>

      <div className='container experience-container'>
        <div className='frontend'>
          <h3>Frontend Skills</h3>
          <div className='experience-content'>
            <ExperienceDetailsFrontend />
          </div>
        </div>
        <div className='backend'>
          <h3>Backend Skills</h3>
          <div className='experience-content'>
            <ExperienceDetailsBackend />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
