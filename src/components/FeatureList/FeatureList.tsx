import React, { FC } from "react";
import "./feature-list.scss";

interface FeatureListProps {
  listItems: string[];
}

const FeatureList = ({ listItems }) => {
  return (
    <ul className="feature-list">
      {listItems.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
};

export default FeatureList;
