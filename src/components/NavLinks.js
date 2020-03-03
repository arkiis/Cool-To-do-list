import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ children, link, showSignupMenu }) => {
  return (
    <li onClick={showSignupMenu}>
      <a>{children}</a>
    </li>
  );
};

export default NavLinks;
