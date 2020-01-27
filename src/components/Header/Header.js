import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faCodepen,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

import "./header.scss"

const Header = () => (
  <header class="page-header">
    <div className="page-header__inner">
      <h1 className="u-font-heading h100 u-green">
        Hello
        <br /> my name is Sean Jones
      </h1>
      <p className="h100 u-font-heading u-black">
        I'm a front end developer based in Glasgow, Scotland.
      </p>
    </div>
    <div class="page-header__footer u-font-heading h600 u-grey">
      <a href="" target="_blank" className="page-header__footer-item">
        <FontAwesomeIcon icon={faGithub} className="u-margin-right-1" /> Github
      </a>
      <a href="" target="_blank" className="page-header__footer-item">
        <FontAwesomeIcon icon={faCodepen} className="u-margin-right-1" />{" "}
        Codepen
      </a>
      <a href="" target="_blank" className="page-header__footer-item">
        <FontAwesomeIcon icon={faLinkedin} className="u-margin-right-1" />{" "}
        LinkedIn
      </a>
    </div>
  </header>
)

Header.propTypes = {}

Header.defaultProps = {}

export default Header