import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h3>Nandanvan Gaikwad</h3>
        <p>Passionate Java Full Stack Developer</p>
      </div>

      <div className="footer-social">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://x.com/nandan_1_" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a  
        href="mailto:nandanvangaikwad51@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope/>
        </a>
      </div>

      <p className="footer-bottom">
        © 2026 Nandanvan Gaikwad. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
