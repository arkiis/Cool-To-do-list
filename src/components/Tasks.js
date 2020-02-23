import React, { useState, useEffect } from "react";
import { Checkbox } from "../components/Checkbox";
import { useTasks } from "../hooks/index";
import { collatedTasks } from "../constants";
import { getTitle, getCollatedTitle, collectedTasksExist } from "../helpers";

import { useSelectedProjectValue, useProjectsValue } from "../context";
import AddTask from "./AddTask";

export const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();
  const { tasks } = useTasks(selectedProject);

  let projectName = ""; //FIX THIS // project.name is undefined

  console.log("projects", projects);

  if (collectedTasksExist(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject);
  }

  if (projects && selectedProject && !collectedTasksExist(selectedProject)) {
    projectName = getTitle(projects, selectedProject);
  }

  useEffect(() => {
    document.title = `${projectName}: Todoist`;
  });

  console.log("tasks", tasks);
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
