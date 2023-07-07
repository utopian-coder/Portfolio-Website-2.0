import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className='wave'
      >
        <path
          fill='#3ba1dc'
          fillOpacity='1'
          d='M0,160L18.5,160C36.9,160,74,160,111,170.7C147.7,181,185,203,222,202.7C258.5,203,295,181,332,186.7C369.2,192,406,224,443,240C480,256,517,256,554,224C590.8,192,628,128,665,106.7C701.5,85,738,107,775,144C812.3,181,849,235,886,240C923.1,245,960,203,997,192C1033.8,181,1071,203,1108,218.7C1144.6,235,1182,245,1218,234.7C1255.4,224,1292,192,1329,176C1366.2,160,1403,160,1422,160L1440,160L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z'
        ></path>
      </svg>
      <footer id='footer'>
        <a href='#' className='logo'>
          UTOPIAN
        </a>
        <ul className='page-links'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#experience'>Experience</a>
          </li>
          <li>
            <a href='#portfolio'>Portfolio</a>
          </li>
          {/* <li>
            <a href='#testimonials'>Testimonials</a>
          </li> */}
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
        <div className='links'>
          <a
            href='https://www.facebook.com/imran.biswas.73700'
            className='link-icon'
          >
            <FaFacebookF />
          </a>
          <a
            href='https://www.instagram.com/___utopian_/'
            className='link-icon'
          >
            <AiOutlineInstagram />
          </a>
          <a
            href='https://www.linkedin.com/in/imranbiswas/'
            className='link-icon'
          >
            <GrLinkedinOption />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
