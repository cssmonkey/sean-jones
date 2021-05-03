import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faCodepen, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer-links u-font-heading h600 u-grey">
      <a
        href="http://github.com/cssmonkey"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-links__item"
      >
        <FontAwesomeIcon icon={faGithub} className="u-margin-right-1" /> Github
      </a>
      <a
        href="https://codepen.io/cssmonkey"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-links__item"
      >
        <FontAwesomeIcon icon={faCodepen} className="u-margin-right-1" /> Codepen
      </a>
      <a
        href="http://uk.linkedin.com/pub/sean-jones/1/987/8b"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-links__item"
      >
        <FontAwesomeIcon icon={faLinkedin} className="u-margin-right-1" /> LinkedIn
      </a>
    </div>
    <div className="footer__text">
      © {new Date().getFullYear()} Sean Jones, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
);

export default Footer;
