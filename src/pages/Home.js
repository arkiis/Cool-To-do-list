import React from "react";
import ModalContainer from "../components/ModalContainer";
import { LOGIN_MODAL, SIGNUP_MODAL } from "../store/actions/type";
import { connect } from "react-redux";
import { showModal } from "../store/actions/ModalActions";

const Home = ({ showModal }) => {
  const showSignupMenu = () => {
    showModal(SIGNUP_MODAL);
  };

  return (
    <>
      <div>
        <img
          className="home-hero"
          width="1158"
          src="/image/download.png"
          alt="cartoon cat and rat looking at each other"
        />
        <section>
          <div className="heroWrapper">
            <h1>Organize your work</h1>
            <a onClick={showSignupMenu}>Get Started</a>
          </div>
        </section>
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  showModal: modelType => dispatch(showModal(modelType))
});

export default connect(null, mapDispatchToProps)(Home);
