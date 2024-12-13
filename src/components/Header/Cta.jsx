import React from "react";
import cv from "../../assets/Imran_Biswas_Resume.pdf";

const Cta = () => {
  return (
    <div className='cta'>
      <a href={cv} download className='btn'>
        Download CV
      </a>
      <a href='#contact' className='btn btn-primary'>
        Let's Talk
      </a>
    </div>
  );
};

export default Cta;
