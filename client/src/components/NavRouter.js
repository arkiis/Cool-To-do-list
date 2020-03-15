import React from "react";
import { NavLink } from "react-router-dom";

const NavRouter = ({ link, children }) => {
  return (
    <li>
      <NavLink to={link}>{children}</NavLink>
    </li>
  );
};

export default NavRouter;
