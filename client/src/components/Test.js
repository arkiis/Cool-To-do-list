import React from "react";
import Link from "../components/Link";

const Test = () => {
  return (
    <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
      <span>cool bro</span>
    </Link>
  );
};

export default Test;
