import React from "react";
import ModalContainer from "../components/ModalContainer";
import { LOGIN_MODAL, SIGNUP_MODAL } from "../store/actions/type";

const Home = () => {
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
            <a>Get Started</a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;