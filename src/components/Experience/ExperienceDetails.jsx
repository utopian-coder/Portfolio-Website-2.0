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
    skill: "TypeScript",
  },
  {
    skill: "Tailwind CSS",
  },
  {
    skill: "Bootstrap",
  },
  {
    skill: "ReactJS",
  },
  {
    skill: "NextJS",
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
    skill: "gRPC",
  },
  {
    skill: "NodeJS",
  },
  {
    skill: "ExpressJS",
  },
  {
    skill: "MongoDB",
  },
  {
    skill: "mongoose",
  },
  {
    skill: "mongoengine",
  },
  {
    skill: 'Java',
  },
  {
    skill: 'Spring Boot',
  },
  {
    skill: 'SQL'
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
