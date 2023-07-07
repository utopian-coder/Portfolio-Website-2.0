import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./ExperienceDetails.css";

const experienceFrontend = [
  {
    skill: "CSS",
    mastery: "Intermediate",
  },
  {
    skill: "CSS",
    mastery: "Intermediate",
  },
  {
    skill: "CSS",
    mastery: "Intermediate",
  },
  {
    skill: "CSS",
    mastery: "Intermediate",
  },
  {
    skill: "CSS",
    mastery: "Intermediate",
  },
  {
    skill: "CSS",
    mastery: "Intermediate",
  },
];

const experienceBackend = [
  {
    skill: "NodeJs",
    mastery: "Intermediate",
  },
  {
    skill: "NodeJs",
    mastery: "Intermediate",
  },
  {
    skill: "NodeJs",
    mastery: "Intermediate",
  },
  {
    skill: "NodeJs",
    mastery: "Intermediate",
  },
  {
    skill: "NodeJs",
    mastery: "Intermediate",
  },
  {
    skill: "NodeJs",
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
