import React from "react";

import "./header.scss";

const Header = () => (
  <header className="page-header">
    <div className="page-header__inner">
      <h1 className="u-font-heading h100 u-green page-header-main-title u-margin-bottom-3">
        <span aria-hidden="true" className="greeting-emoji h200">
          👋
        </span>{" "}
        Hello <span className="page-title-section">my name is Sean Jones</span>
      </h1>
      <p className="h200 u-font-heading u-black u-margin-bottom-2">
        <span className="page-title-section">I'm a front end developer</span>{" "}
        <span className="page-title-section">based in Glasgow, Scotland.</span>
      </p>
    </div>
  </header>
);

export default Header;
