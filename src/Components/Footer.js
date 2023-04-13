import React from "react";
import githubIcon from '../Images/github-icon.png'
import linkedinIcon from '../Images/linkedin-icon.png'
import gmailIcon from '../Images/gmail-icon.png'
import '../css/footer.css'

function Footer() {
  return(
    <div className="footer">
      <h4>Me encontre no:</h4>
      <div className="navLinks">
      <a href="https://github.com/LuanVictr"><img className="social-links" src={githubIcon} alt="github link" /></a>
        <a href="https://www.linkedin.com/in/luanvictor-/"><img className="social-links" src={linkedinIcon} alt="LinkedIn link" /></a>
        <a><img className="social-links" id="gmail-icon" src={gmailIcon} alt="Gmail link" /></a>
        </div>
    </div>
  )
}

export default Footer;