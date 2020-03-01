import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ children, link }) => {
  return (
    <li>
      <NavLink exact activeClassName="active" to={link} href={link}>
        {children}
      </NavLink>
    </li>
  );
};

export default NavLinks;
