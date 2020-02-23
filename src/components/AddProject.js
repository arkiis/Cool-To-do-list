import React, { useState } from "react";
import { firebase } from "../firebase";
import { generatePushId } from "../helpers";
import { useProjectsValue } from "../context";

const AddProject = ({ shouldShow = false }) => {
  const [show, setShow] = useState(shouldShow);
  const [projectName, setProjectName] = useState("");

  const projectId = generatePushId();
  const { setProjects } = useProjectsValue();

  const addProject = () =>
    projectName &&
    firebase
      .firestore()
      .collection("projects")
      .add({
        projectId,
        name: projectName,
        userId: "ffifg8347"
      })
      .then(() => {
        setProjects([]);
        setProjectName("");
        setShow(false); //after submission, modal closes
      });
  return (
    <div className="add-project" data-testid="add-project">
      {show && (
        <div className="">
          <input
            value={projectName}
            onChange={e => setProjectName(e.target.value)}
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
          >
            Cancel
          </span>
        </div>
      )}
      <span className="add-project__plus">+</span>
      <span
        data-testid="add-project-action"
        className="add-project-action"
        onClick={() => setShow(!show)}
      >
        Add Project
      </span>
    </div>
  );
};

export default AddProject;
