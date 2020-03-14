import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/AuthActions";
import LinearProgress from "@material-ui/core/LinearProgress";

import Message from "../Message";

const VerifyEmail = ({ sendVerification, error, loading }) => {
  return (
    <div>
      <img src="./image/verify-email.png" className="home-hero" width="1000" />
      <div className="verifyWrapper">
        <h1>Verify your email</h1>
        <p>Go to your email so you can join the club</p>
        <button onClick={() => sendVerification()}>
          Re-send verification email
        </button>
        <Message error show={error}>
          {error}
        </Message>
        <Message success show={error === false}>
          Message sent successfully!
        </Message>
        {loading && (
          <div style={{ textAlign: "center" }}>
            <LinearProgress />
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.verifyEmail.loading,
  error: auth.verifyEmail.error
});

const mapDispatchToProps = {
  sendVerification: actions.verifyEmail
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
