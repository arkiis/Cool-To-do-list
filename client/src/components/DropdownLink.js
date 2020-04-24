import React from "react";

const DropdownLink = (props) => {
  return (
    <div
      className="menu-item"
      onClick={() => props.goToMenu && props.setActiveMenu(props.goToMenu)}
    >
      {props.children}
      {props.rightIcon}
    </div>
  );
};

export default DropdownLink;
