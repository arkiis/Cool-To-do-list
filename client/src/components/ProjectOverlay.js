import React from "react";
import PropTypes from "prop-types";

import { useProjectsValue } from "../context";

const ProjectOverlay = ({
  setProject,
  showProjectOverlay,
  setShowProjectOverlay,
  setProjectName
}) => {
  const { projects } = useProjectsValue();

  return (
    projects &&
    showProjectOverlay && (
      <div className="project-overlay" data-testid="project-overlay">
        <ul className="project-overlay__list">
          {projects.map(project => (
            <li key={project.projectId} data-testid="project-overlay-action">
              <div
                onClick={() => {
                  setProject(project.projectId);
                  setProjectName(project.name);
                  setShowProjectOverlay(false);
                }}
                onKeyDown={() => {
                  setProject(project.projectId);
                  setShowProjectOverlay(false);
                }}
                role="button"
                tabIndex={0}
                aria-label="Select the task project"
              >
                {" "}
                {project.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default React.memo(ProjectOverlay);

ProjectOverlay.propTypes = {
  projects: PropTypes.array
};
