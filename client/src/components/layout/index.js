import React, { useState } from "react";
import Header from "./Header";
import { ProjectsProvider, SelectedProjectProvider } from "../../context";
import { connect } from "react-redux";

const Layout = ({
  darkModeDefault = false,
  children,
  loggedIn,
  emailVerified
}) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main
          data-testid="application"
          className={
            darkMode
              ? "darkmode"
              : undefined || !loggedIn.uid
              ? "signedOutHeader"
              : undefined
          }
        >
          <Header
            loggedIn={loggedIn}
            emailVerified={emailVerified}
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
  loggedIn: firebase.auth,
  emailVerified: firebase.auth.emailVerified
});

export default connect(mapStateToProps)(Layout);
