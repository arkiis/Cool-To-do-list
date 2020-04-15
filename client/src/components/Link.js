import React from "react";
import * as Scroll from "react-scroll";

let ScrollLink = Scroll.ScrollLink;
const Link = (props) => {
  return <a {...props}>{props.children}</a>;
};

export default ScrollLink(Link);
