import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ children, link, clicked }) => {
  return (
    <li onClick={clicked}>
      <NavLink to={link}>
        <a>{children}</a>
      </NavLink>
    </li>
  );
};

export default NavLinks;
