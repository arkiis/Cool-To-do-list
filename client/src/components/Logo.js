import React from "react";

const Logo = ({ loggedIn }) => {
  return (
    <div className="logo">
      {loggedIn.uid ? (
        <img src="/image/logo.png" alt="Todoist" />
      ) : (
        <a href="/">
          <img src="/image/home-logo.svg" alt="Todoist" />
        </a>
      )}
    </div>
  );
};

export default Logo;
