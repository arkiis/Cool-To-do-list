import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import PropTypes from "prop-types";
import Logo from "../Logo";
import { AddTask } from "../AddTask";
import NavLinks from "../NavLinks";

const Header = ({ darkMode, setDarkMode, loggedIn }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  let links;

  if (loggedIn.uid) {
    links = (
      <>
        <li data-testid="quick-add-task-action" className="settings__add">
          <button
            aria-label="Quick Add Task"
            onClick={() => {
              setShowQuickAddTask(true);
              setShouldShowMain(true);
            }}
            onKeyDown={() => {
              setShowQuickAddTask(true);
              setShouldShowMain(true);
            }}
          >
            +
          </button>
        </li>

        <li data-testid="dark-mode-action" className="settings__darkmode">
          <button
            aria-label="Darkmode on/off"
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            onKeyDown={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </li>

        <AddTask
          showAddTaskMain={false}
          shouldShowMain={shouldShowMain}
          showQuickAddTask={showQuickAddTask}
          setShowQuickAddTask={setShowQuickAddTask}
        />
      </>
    );
  } else {
    links = (
      <>
        <NavLinks link="/premium">Premium</NavLinks>
        <NavLinks link="/signin">Login</NavLinks>
        <NavLinks link="/signup">Signup</NavLinks>
      </>
    );
  }

  return (
    <header className="header" data-testid="header">
      <nav>
        <Logo loggedIn={loggedIn} />
        <div className="settings">
          <ul>{links}</ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired
};
