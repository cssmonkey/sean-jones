import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import "./feature-list.scss"

const FeatureList = ({ className, listItems }) => {
  const classes = classnames("feature-list", className)
  return (
    <ul className={classes}>
      {listItems.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

FeatureList.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
}

export default FeatureList
