import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/AuthActions";

const VerifyEmail = () => {
  return <div>HI!</div>;
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.verifyEmail.loading,
  error: auth.verifyEmail.error
});

const mapDispatchToProps = {
  sendVerification: actions.verifyEmail
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
