import React from "react";
import * as Scroll from "react-scroll";
import Link from "../components/Link";

let ScrollLink = Scroll.ScrollLink;

const SectionNavigation = ({ nav }) => {
  const handleClick = () => {
    console.log("hiiiiiiii");
  };

  return (
    <button className="navButton" onClick={handleClick}>
      <Link
        activeClass="active-nav"
        to={nav.to}
        spy={true}
        smooth={true}
        delay={100}
        offset={-250}
        duration={500}
      >
        {nav.label}
        <span>{nav.name}</span>
      </Link>
    </button>
  );
};

export default ScrollLink(SectionNavigation);
