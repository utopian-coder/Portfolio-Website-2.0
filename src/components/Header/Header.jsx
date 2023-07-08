import React from "react";
import "./Header.css";
import Cta from "./Cta";
import profileImage from "../../assets/profile.png";
import Socials from "./Socials";

const Header = () => {
  return (
    <header>
      <div className='container header-container'>
        <h5>Hello I'm</h5>
        <h1>Imran Biswas</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <Cta />
        <a href='' className='scroll-down'>
          Scroll Down
        </a>
        <Socials />
        <div className='me'>
          <img src={profileImage} alt='Imran Biswas' />
        </div>
      </div>
    </header>
  );
};

export default Header;
