import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";

const Socials = () => {
  return (
    <div className='header-socials'>
      <a href='https://www.linkedin.com/in/imranbiswas/' target='_blank'>
        <BsLinkedin />
      </a>
      <a href='https://twitter.com/imran_biswas22' target='_blank'>
        <AiFillTwitterCircle />
      </a>
      <a href='https://github.com/utopian-coder' target='_blank'>
        <AiFillGithub />
      </a>
    </div>
  );
};

export default Socials;
