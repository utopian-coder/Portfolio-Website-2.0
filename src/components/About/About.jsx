import React from "react";
import { FaAward } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineLaptop } from "react-icons/ai";
import "./About.css";
import profileImage from "../../assets/about.png";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about-container'>
        <div className='about-me'>
          <div className='me-image'>
            <img src={profileImage} alt='dp' />
          </div>
        </div>
        <div className='about-content'>
          <div className='about-cards'>
            <article className='about-card'>
              <BsGraphUpArrow className='about-icon' />
              <h5>Projects</h5>
              <small>15+ Projects</small>
            </article>
            <article className='about-card'>
              <AiOutlineLaptop className='about-icon' />
              <h5>LeetCode</h5>
              <small>240+ Solved</small>
            </article>
            <article className='about-card'>
              <FaAward className='about-icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
          </div>
          <p>
            I'm an xperienced full-stack developer proficient in MERN stack with
            a passion for problem-solving. Skilled in tackling data structure
            and algorithms challenges to enhance problem-solving abilities.
            Ready to create robust and efficient solutions to meet your
            development needs.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
