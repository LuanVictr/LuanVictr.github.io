import React from "react";
import '../css/header.css';
import logoImage from '../Images/LuanLogo.png';
import githubIcon from '../Images/github-icon.png';
import gmailIcon from '../Images/gmail-icon.png';
import linkedinIcon from '../Images/linkedin-icon.png';

function Header () {
  return(
    <header className="header">
      <img className="logoImage"
      src= { logoImage }
      alt="Foto portifolio" />
      <div className="header-navegation">
        <a>Home</a>
        <a>Projetos</a>
        <a>Sobre mim</a>
      </div>
      <div className="header-links">
        <a href="https://github.com/LuanVictr"><img className="social-links" src={githubIcon} alt="github link" /></a>
        <a href="https://www.linkedin.com/in/luanvictor-/"><img className="social-links" src={linkedinIcon} alt="LinkedIn link" /></a>
        <a><img className="social-links" id="gmail-icon" src={gmailIcon} alt="Gmail link" /></a>
      </div>
    </header>
  );
}

export default Header;