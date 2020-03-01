import React from "react";
// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import LinearProgress from "@material-ui/core/LinearProgress";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

// Actions
import { signUp } from "../../store/actions";

const Register = ({ signUp, loading, error }) => {
  return <div>hi</div>;
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error
});
const mapDispatchToProps = {
  signUp: signUp
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
