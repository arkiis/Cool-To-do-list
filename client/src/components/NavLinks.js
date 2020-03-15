import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ children, link, clicked }) => {
  return (
    <li onClick={clicked}>
      <a href={link}>{children}</a>
    </li>
  );
};

export default NavLinks;
