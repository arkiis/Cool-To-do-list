import React from "react";

const HeaderSidebar = ({ links, showHeaderSidebar }) => {
  return (
    <div className={`headerSidebar ${showHeaderSidebar ? "showSide" : ""}`}>
      <ul>{links}</ul>
    </div>
  );
};

export default HeaderSidebar;
