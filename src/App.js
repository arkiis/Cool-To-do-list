import React, { useState } from "react";
import Header from "./components/layout/Header";
import { NotificationContainer } from "react-notifications";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Content from "./components/layout/Content";
import { ProjectsProvider, SelectedProjectProvider } from "./context";
import PropTypes from "prop-types";
import Layout from "./components/layout";

const App = ({ loggedIn, emailVerified }) => {
  let routes;
  if (loggedIn && !emailVerified) {
    routes = (
      <Switch>
        <Content />
      </Switch>
    );
  }

  return <Layout>{routes}</Layout>;
};

App.propTypes = {
  darkModeDefault: PropTypes.bool
};

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid,
  emailVerified: firebase.auth.emailVerified
});

export default connect(mapStateToProps)(App);
