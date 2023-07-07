import React from "react";
import "./Project.css";

const projectTitles = [
  {
    title: "Ttitle",
    liveLink: "https://utopian-expense-calculator.vercel.app/",
    gitHubLink: "https://github.com/utopian-coder/Expense-Calculator",
    imgSource:
      "https://cdn.dribbble.com/userupload/8347832/file/original-24707a3e5c47020f194dd442fb682df5.png?compress=1&resize=1200x900",
  },
  {
    title: "Ttitle",
    liveLink: "https://utopian-expense-calculator.vercel.app/",
    gitHubLink: "https://github.com/utopian-coder/Expense-Calculator",
    imgSource:
      "https://cdn.dribbble.com/userupload/8347832/file/original-24707a3e5c47020f194dd442fb682df5.png?compress=1&resize=1200x900",
  },
  {
    title: "Ttitle",
    liveLink: "https://utopian-expense-calculator.vercel.app/",
    gitHubLink: "https://github.com/utopian-coder/Expense-Calculator",
    imgSource:
      "https://cdn.dribbble.com/userupload/8347832/file/original-24707a3e5c47020f194dd442fb682df5.png?compress=1&resize=1200x900",
  },
  {
    title: "Ttitle",
    liveLink: "https://utopian-expense-calculator.vercel.app/",
    gitHubLink: "https://github.com/utopian-coder/Expense-Calculator",
    imgSource:
      "https://cdn.dribbble.com/userupload/8347832/file/original-24707a3e5c47020f194dd442fb682df5.png?compress=1&resize=1200x900",
  },
  {
    title: "Ttitle",
    liveLink: "https://utopian-expense-calculator.vercel.app/",
    gitHubLink: "https://github.com/utopian-coder/Expense-Calculator",
    imgSource:
      "https://cdn.dribbble.com/userupload/8347832/file/original-24707a3e5c47020f194dd442fb682df5.png?compress=1&resize=1200x900",
  },
  {
    title: "Ttitle",
    liveLink: "https://utopian-expense-calculator.vercel.app/",
    gitHubLink: "https://github.com/utopian-coder/Expense-Calculator",
    imgSource:
      "https://cdn.dribbble.com/userupload/8347832/file/original-24707a3e5c47020f194dd442fb682df5.png?compress=1&resize=1200x900",
  },
];

const Project = () => {
  return projectTitles.map(({ imgSource, title, liveLink, gitHubLink }) => (
    <article className='project-item' key={Math.random()}>
      <div className='project-img'>
        <img src={imgSource} alt='expense calculator' />
      </div>
      <h3>{title}</h3>
      <div className='ctaPortfolio'>
        <a href={liveLink} className='btn' target='_blank'>
          Live Demo
        </a>
        <a href={gitHubLink} className='btn btn-primary' target='_blank'>
          GitHub
        </a>
      </div>
    </article>
  ));
};

export default Project;
