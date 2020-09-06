import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExitToApp from "@material-ui/icons/ExitToApp";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { firebase } from "../firebase";
import { getSingleLetter } from "../helpers/index";
import DropdownLink from "./DropdownLink";
import { CSSTransition } from "react-transition-group";

const Dropdown = ({ loggedIn }) => {
  const [profileMenu, setProfileMenu] = useState(false);
  const [dropDownSub, setDropdownSub] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main");
  const [name, setName] = useState({});

  const onMouseMenuHandler = () => {
    setProfileMenu(!profileMenu);
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(loggedIn.uid)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          setName(doc.data());
        } else {
          // doc.data() will be undefined in this case
        }
      });
  }, []);
  return (
    <div className="user-profile-menu">
      <div className="user-avatar">
        {name && name.userName && getSingleLetter(name.userName)}
      </div>
      <div className="user-drop-down-icon" onClick={onMouseMenuHandler}>
        <ExpandMoreIcon />
      </div>
      {profileMenu && (
        <>
          <CSSTransition
            in={activeMenu === "main"}
            timeout={500}
            unmountOnExit
            classNames="menu-primary"
          >
            <>
              <div className="user-profile-menu-panel">
                <DropdownLink rightIcon={<ChevronRightIcon />}>
                  Try Premium
                </DropdownLink>
                <DropdownLink
                  rightIcon={<ChevronRightIcon />}
                  goToMenu="settings"
                  setActiveMenu={setActiveMenu}
                >
                  Settings
                </DropdownLink>
                <hr />
                <div className="menu-log-out">
                  <ExitToApp />
                  <NavLink to="/home/logout">Log Out</NavLink>
                </div>
              </div>
            </>
          </CSSTransition>
          <CSSTransition
            in={activeMenu === "settings"}
            timeout={500}
            unmountOnExit
            classNames="menu-secondary"
          >
            <div className="user-profile-menu-panel">
              <DropdownLink goToMenu="main" setActiveMenu={setActiveMenu}>
                Back
              </DropdownLink>
              <DropdownLink rightIcon={<ChevronRightIcon />}>
                Account
              </DropdownLink>
              <DropdownLink rightIcon={<ChevronRightIcon />}>
                Privacy
              </DropdownLink>
            </div>
          </CSSTransition>
        </>
      )}
    </div>
  );
};

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth,
});

export default connect(mapStateToProps, null)(Dropdown);
