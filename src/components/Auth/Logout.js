import React, { useEffect } from "react";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/AuthActions";

const Logout = ({ logout }) => {
  useEffect(() => {
    logout();
  }, [logout]);
  return null;
};

const mapDispatchToProps = {
  logout: signOut
};

export default connect(null, mapDispatchToProps)(Logout);
