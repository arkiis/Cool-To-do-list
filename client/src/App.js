import React, { Suspense } from "react";
import Header from "./components/layout/Header";
import { NotificationContainer } from "react-notifications";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Register from "./components/Auth/Register";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PropTypes from "prop-types";
import Layout from "./components/layout";
import Home from "./pages/Home";
import ModalContainer from "./components/ModalContainer";
import Logout from "./components/Auth/Logout";
import Checkout from "./pages/Checkout";
const Content = React.lazy(() => import("./components/layout/Content"));
const VerifyEmail = React.lazy(() => import("./components/Auth/VerifyEmail"));

const stripePromise = loadStripe("pk_test_2do6pJchuMIGtZ2cqrLgDjM300sB7DRzbF");

// TIP: don't call loadStripe
// only load once per page

const App = ({ loggedIn, emailVerified }) => {
  let routes;
  if (loggedIn && !emailVerified) {
    routes = (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/verify-email" component={VerifyEmail} />
          <Redirect to="/verify-email" />
        </Switch>
      </Suspense>
    );
  } else if (loggedIn && emailVerified) {
    routes = (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/home" component={Content} />
          <Route exact path="/home/logout" component={Logout} />
          <Redirect to="/home" />
        </Switch>
      </Suspense>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/premium" component={Checkout} />
        <Route exact path="/signup" component={Register} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Layout>
      <Elements stripe={stripePromise}>{routes}</Elements>
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
