import React from "react";
import "./Project.css";

import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";

const projectTitles = [
  {
    title: "Airbnb",
    liveLink: "https://utopian-booking-app.vercel.app/",
    gitHubLink: "https://github.com/utopian-coder/Airbnb-Clone",
    imgSource: project5,
  },
  // {
  //   title: "Blogopedia",
  //   liveLink: "https://utopian-expense-calculator.vercel.app/",
  //   gitHubLink: "https://github.com/utopian-coder/Expense-Calculator",
  //   imgSource:
  //     "https://cdn.dribbble.com/userupload/8347832/file/original-24707a3e5c47020f194dd442fb682df5.png?compress=1&resize=1200x900",
  // },
  {
    title: "State bank of Utopia",
    liveLink: "https://github.com/utopian-coder/Bankist",
    gitHubLink: "https://github.com/utopian-coder/Bankist",
    imgSource: project1,
  },

  {
    title: "Tomato Food Delivery",
    liveLink: "https://utopianfoodheaven.netlify.app/",
    gitHubLink: "https://github.com/utopian-coder/Food-Delivery-App",
    imgSource: project3,
  },
  {
    title: "Html-Css-Js Projects",
    liveLink: "https://github.com/utopian-coder/Html-Css-JavaScript-Projects",
    gitHubLink: "https://github.com/utopian-coder/Html-Css-JavaScript-Projects",
    imgSource: project2,
  },
  {
    title: "Expense Calculator",
    liveLink: "https://utopian-expense-calculator.vercel.app/",
    gitHubLink: "https://github.com/utopian-coder/Expense-Calculator",
    imgSource: project4,
  },

  {
    title: "Bits and Bytes",
    liveLink: "https://utopian-expense-calculator.vercel.app/",
    gitHubLink: "https://github.com/utopian-coder/Expense-Calculator",
    imgSource: project6,
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
