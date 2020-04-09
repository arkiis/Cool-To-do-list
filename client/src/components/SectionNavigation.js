import React from "react";

const SectionNavigation = ({ nav }) => {
  return (
    <button className="navButton">
      <h5>
        {nav.label}
        <span>{nav.name}</span>
      </h5>
    </button>
  );
};

export default SectionNavigation;
