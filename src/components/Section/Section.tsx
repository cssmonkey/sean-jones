import React, { FC } from "react";
import classnames from "classnames";
import "./section.scss";

interface SectionProps {
  className?: string;
  children: JSX.Element | JSX.Element[];
  image?: JSX.Element;
}

const Section: FC<SectionProps> = ({ children, className, image }) => {
  const classes = classnames("section", className);
  return (
    <section className={classes}>
      <div className="section__inner">
        {image && <div className="section__image">{image}</div>}
        {children && <div className="section__text">{children}</div>}
      </div>
    </section>
  );
};

export default Section;
