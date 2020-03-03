import React, { Suspense } from "react";
import Header from "./components/layout/Header";
import { NotificationContainer } from "react-notifications";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Register from "./components/Auth/Register";
import Content from "./components/layout/Content";
import PropTypes from "prop-types";
import Layout from "./components/layout";
import VerifyEmail from "./components/Auth/VerifyEmail";
import Home from "./pages/Home";
import ModalContainer from "./components/ModalContainer";

const App = ({ loggedIn, emailVerified }) => {
  let routes;
  if (loggedIn && !emailVerified) {
    routes = (
      <Switch>
        <Route exact path="/verify-email" component={VerifyEmail} />
        <Redirect to="/verify-email" />
      </Switch>
    );
  } else if (loggedIn && emailVerified) {
    routes = (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/home" component={Content} />
          <Redirect to="/home" />
        </Switch>
      </Suspense>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Register} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Layout>
      {routes}
      <ModalContainer />
    </Layout>
  );
};

App.propTypes = {
  darkModeDefault: PropTypes.bool
};

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid,
  emailVerified: firebase.auth.emailVerified
});

export default connect(mapStateToProps)(App);
