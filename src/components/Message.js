import React from "react";
import Error from "@material-ui/icons/Error";
import Check from "@material-ui/icons/Check";

const Message = ({ children, error, success, show }) => {
  return (
    <>
      <p className={`${success ? "success" : ""}`}>{children}</p>
    </>
  );
};

export default Message;
