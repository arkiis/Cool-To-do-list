import React from "react";
import Register from "./Auth/Register";
import Login from "./Auth/Login";

import { LOGIN_MODAL, SIGNUP_MODAL } from "../store/actions/type";
import { connect } from "react-redux";

const MODAL_COMPONENTS = {
  LOGIN_MODAL: Login,
  SIGNUP_MODAL: Register
};

const ModalContainer = props => {
  if (!props.modalType) {
    return null;
  }
  const SpecificModal = MODAL_COMPONENTS[props.modalType];

  return <SpecificModal />;
};

const mapStateToProps = state => {
  return {
    modalType: state.modal.modalType
  };
};

export default connect(mapStateToProps)(ModalContainer);
