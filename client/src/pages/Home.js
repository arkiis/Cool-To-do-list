import React from "react";
import ModalContainer from "../components/ModalContainer";
import { LOGIN_MODAL, SIGNUP_MODAL } from "../store/actions/type";
import { connect } from "react-redux";
import { showModal } from "../store/actions/ModalActions";
import Reviews from "../components/Reviews";
import ArrowForward from "@material-ui/icons/ArrowForward";
import { sideNavigation } from "../constants/index";
import SectionNavigation from "../components/SectionNavigation";
import * as Scroll from "react-scroll";
import Link from "../components/Link";

const Home = ({ showModal }) => {
  const showSignupMenu = () => {
    showModal(SIGNUP_MODAL);
  };
  let ScrollLink = Scroll.Link;
  let Element = Scroll.Element;

  return (
    <>
      <div className="homeWrapper">
        <Element className="homeImage " name="hero">
          <div className="heroWrapper">
            <h1>Organize your work</h1>
            <a onClick={showSignupMenu}>Get Started</a>
          </div>
          <img
            className="home-hero"
            src="/image/download.png"
            alt="cartoon cat and rat looking at each other"
          />
        </Element>

        <Element className="reviewSection " name="review">
          <div className="reviewBG" />

          <Reviews />
        </Element>
        <Element className="videoSection " name="video">
          <div className="videoContent">
            <p>
              Todoist has helped
              <br />
              millions of people complete
              <h1>
                over 1.5 billion tasks
                <br />
                in 150+ million projects
              </h1>
            </p>
          </div>
          <div className="videoWrapper">
            <div className="videoContainer">
              <img src="./image/bg-green.webp" className="green-bg" />
              <img src="./image/video-thumb.webp" className="video-thumb" />
            </div>
            <a href="https://www.youtube.com/channel/UC2cIJ3z3TaHdcBofbroVUEA?view_as=subscriber">
              <div className="arrowForward">
                <ArrowForward />
              </div>
              <span>Learn more about the Todoist community</span>
            </a>
          </div>
        </Element>
        <nav className="sectionNavigation">
          {sideNavigation.map((el, id) => (
            <SectionNavigation nav={el} key={id} />
          ))}
        </nav>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  showModal: (modelType) => dispatch(showModal(modelType)),
});

export default connect(null, mapDispatchToProps)(Home);
