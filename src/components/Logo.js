import React from "react";

const Logo = ({ loggedIn }) => {
  return (
    <div className="logo">
      {loggedIn.uid ? (
        <img src="/image/logo.png" alt="Todoist" />
      ) : (
        <img src="/image/home-logo.svg" alt="Todoist" />
      )}
    </div>
  );
};

export default Logo;
