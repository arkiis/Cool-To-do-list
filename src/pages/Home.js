import React from "react";
import ModalContainer from "../components/ModalContainer";
import { LOGIN_MODAL, SIGNUP_MODAL } from "../store/actions/type";
import { connect } from "react-redux";
import { showModal } from "../store/actions/ModalActions";
import Reviews from "../components/Reviews";

const Home = ({ showModal }) => {
  const showSignupMenu = () => {
    showModal(SIGNUP_MODAL);
  };

  return (
    <>
      <div className="homeWrapper">
        <section>
          <div className="heroWrapper">
            <h1>Organize your work</h1>
            <a onClick={showSignupMenu}>Get Started</a>
          </div>
          <img
            className="home-hero"
            src="/image/download.png"
            alt="cartoon cat and rat looking at each other"
          />
        </section>

        <section className="reviewSection">
          <div className="reviewBG" />

          <Reviews />
        </section>
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  showModal: modelType => dispatch(showModal(modelType))
});

export default connect(null, mapDispatchToProps)(Home);
