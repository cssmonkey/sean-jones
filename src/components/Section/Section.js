import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import "./section.scss"

const Section = ({ children, className }) => {
  const classes = classnames("section", className)
  return (
    <section className={classes}>
      <div className="section__inner">{children}</div>
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
}

export default Section
