import React, { useState } from "react";
import { firebase } from "../firebase";
import { generatePushId } from "../helpers";
import { useProjectsValue } from "../context";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const AddProject = ({ shouldShow = false, loggedIn }) => {
  const [show, setShow] = useState(shouldShow);
  const [projectName, setProjectName] = useState("");

  const projectId = generatePushId();
  const { projects, setProjects } = useProjectsValue();

  const addProject = () =>
    projectName &&
    firebase
      .firestore()
      .collection("projects")
      .add({
        projectId,
        name: projectName,
        userId: loggedIn.uid,
      })
      .then(() => {
        setProjects([...projects]);
        setProjectName("");
        setShow(false); //after submission, modal closes
      });
  return (
    <div className="add-project" data-testid="add-project">
      {show && (
        <div className="add-project__input" data-testid="add-project-inner">
          <input
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="add-project__name"
            data-testid="project-name"
            type="text"
            placeholder="Name your project"
          />
          <button
            className="add-project__submit"
            type="button"
            onClick={() => addProject()}
            data-testid="add-project-submit"
          >
            Add Project
          </button>
          <span
            data-testid="hide-project-overlay"
            className="add-project__cancel"
            onClick={() => setShow(false)}
            onKeyDown={() => setShow(false)}
            role="button"
            tabIndex={0}
          >
            Cancel
          </span>
        </div>
      )}
      <span className="add-project__plus">+</span>
      <span
        aria-label="Add Project"
        data-testid="add-project-action"
        className="add-project-action"
        onClick={() => setShow(!show)}
        onKeyDown={() => setShow(!show)}
        role="button"
        tabIndex={0}
      >
        Add Project
      </span>
    </div>
  );
};

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth,
});

export default connect(mapStateToProps, null)(AddProject);

AddProject.propTypes = {
  shouldShow: PropTypes.bool,
};
