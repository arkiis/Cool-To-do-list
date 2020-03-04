import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PowerSettingsNew from "@material-ui/icons/PowerSettingsNew";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { firebase } from "../firebase";
import { getSingleLetter } from "../helpers/index";

const Dropdown = ({ loggedIn }) => {
  const [profileMenu, setProfileMenu] = useState(false);
  const [name, setName] = useState({});

  const onMouseMenuHandler = () => {
    setProfileMenu(!profileMenu);
  };
  console.log(loggedIn.uid);
  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(loggedIn.uid)
      .get()
      .then(function(doc) {
        if (doc.exists) {
          setName(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
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
        <div className="user-profile-menu-panel">
          <div className="menu-item">
            <span>Try Premium</span>
            <ChevronRightIcon />
          </div>
          <div className="menu-item">
            <span>Settings</span>
            <ChevronRightIcon />
          </div>

          <hr />
          <div className="menu-log-out">
            <PowerSettingsNew />
            <NavLink to="/home/logout">
              <span>Log Out</span>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth
});

export default connect(mapStateToProps, null)(Dropdown);
