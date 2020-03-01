import React from "react";
// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import LinearProgress from "@material-ui/core/LinearProgress";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

// Actions
import { signupUserInFirebase } from "../../store/actions";

const Register = () => {
  return <div></div>;
};

const mapStateToProps = ({ authUser }) => {
  const { loading } = authUser;

  return { loading };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      signupUserInFirebase: signupUserInFirebase
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
