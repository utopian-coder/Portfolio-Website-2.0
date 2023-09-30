import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./ExperienceDetails.css";

const experienceFrontend = [
  {
    skill: "Html",
    mastery: "Intermediate",
  },
  {
    skill: "CSS",
    mastery: "Intermediate",
  },
  {
    skill: "JavaScript",
    mastery: "Intermediate",
  },
  {
    skill: "Tailwind CSS",
    mastery: "Intermediate",
  },
  {
    skill: "Bootstrap",
    mastery: "Intermediate",
  },
  {
    skill: "ReactJs",
    mastery: "Intermediate",
  },
];

const experienceBackend = [
  {
    skill: "NodeJs",
    mastery: "Intermediate",
  },
  {
    skill: "ExpressJs",
    mastery: "Intermediate",
  },
  {
    skill: "MongoDB",
    mastery: "Intermediate",
  },
  {
    skill: "Mongoose",
    mastery: "Intermediate",
  },
  {
    skill: "MySql",
    mastery: "Intermediate",
  },
  {
    skill: "REST Api",
    mastery: "Intermediate",
  },
];

export const ExperienceDetailsFrontend = () => {
  return experienceFrontend.map((exp) => (
    <article key={Math.random()} className='experience-details'>
      <BsPatchCheckFill className='experience-details-icon' />
      <div>
        <h4>{exp.skill}</h4>
        <small className='text-light'>{exp.mastery}</small>
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
        <small className='text-light'>{exp.mastery}</small>
      </div>
    </article>
  ));
};
