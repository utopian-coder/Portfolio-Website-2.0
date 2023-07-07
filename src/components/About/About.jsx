import React from "react";
import { FaAward } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import "./About.css";
import profileImage from "../../assets/me-about.jpg";

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
              <FaAward className='about-icon' />
              <h5>Experince</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about-card'>
              <FaAward className='about-icon' />
              <h5>Reviews</h5>
              <small>3+ Years Working</small>
            </article>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos veniam
            dicta, enim nulla ab velit soluta iste et unde voluptate iusto
            voluptatibus suscipit quod voluptas? Repudiandae quaerat illum iusto
            magni.
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
