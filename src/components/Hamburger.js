import React from "react";

const Hamburger = ({ showSideMenu }) => {
  return <div className="hamburger" onClick={showSideMenu}></div>;
};

export default Hamburger;
