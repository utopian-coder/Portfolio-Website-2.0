import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./ExperienceDetails.css";

const experienceFrontend = [
  {
    skill: "Html",
  },
  {
    skill: "CSS",
  },
  {
    skill: "JavaScript",
  },
  {
    skill: "Tailwind CSS",
  },
  {
    skill: "Bootstrap",
  },
  {
    skill: "ReactJs",
  },
  {
    skill: "React Native",
  },
];

const experienceBackend = [
  {
    skill: "Python",
  },
  {
    skill: "FastAPI",
  },

  {
    skill: "NodeJs",
  },
  {
    skill: "ExpressJs",
  },
  {
    skill: "MongoDB",
  },
  {
    skill: "Mongoose",
  },
  {
    skill: "REST API",
  },
];

export const ExperienceDetailsFrontend = () => {
  return experienceFrontend.map((exp) => (
    <article key={Math.random()} className='experience-details'>
      <BsPatchCheckFill className='experience-details-icon' />
      <div>
        <h4>{exp.skill}</h4>
      </div>
    </article>
  ));
};

export const ExperienceDetailsBackend = () => {
  return experienceBackend.map((exp) => (
    <article key={Math.random()} className='experience-details'>
      <BsPatchCheckFill className='experience-details-icon' />
      <div>
        <h4>{exp.skill}</h4>
      </div>
    </article>
  ));
};
