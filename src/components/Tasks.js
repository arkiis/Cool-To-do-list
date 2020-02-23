import React, { useState, useEffect } from "react";
import { Checkbox } from "../components/Checkbox";
import AddTask from "./AddTask";
import { useTasks } from "../hooks/index";
import { collatedTasks } from "../constants";
import { getTitle, getCollatedTitle, collectedTasksExist } from "../helpers";

import { useSelectedProjectValue, useProjectsValue } from "../context";

export const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();
  const { tasks } = useTasks(selectedProject);

  let projectName = ""; //FIX THIS // project.name is undefined

  // if (projects && selectedProject && !collectedTasksExist(selectedProject)) {
  //   projectName = getTitle(projects, selectedProject).name;
  // }

  // if (collectedTasksExist(selectedProject) && selectedProject) {
  //   projectName = getCollatedTitle(collatedTasks, selectedProject).name;
  // }

  // if (
  //   projects.length > 0 &&
  //   selectedProject &&
  //   !collectedTasksExist(selectedProject)
  // ) {
  //   projectName = getTitle(projects, selectedProject).name;
  // }

  useEffect(() => {
    document.title = `${projectName}: Todoist`;
  });

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>

      <ul className="tasks__list">
        {tasks.map(task => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>

      <AddTask />
    </div>
  );
};
