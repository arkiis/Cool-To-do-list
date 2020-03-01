import React, { useState } from "react";
import Header from "./Header";
import { ProjectsProvider, SelectedProjectProvider } from "../../context";
import { connect } from "react-redux";

const Layout = ({ darkModeDefault = false, children, loggedIn }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main
          data-testid="application"
          className={darkMode ? "darkmode" : undefined}
        >
          <Header
            loggedIn={loggedIn}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />{" "}
          <div className="MainContent">{children}</div>
        </main>
        ;
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};
const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth
});

export default connect(mapStateToProps)(Layout);
