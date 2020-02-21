import { collatedTasks } from "../constants/index";

export const collectedTasksExist = selectedProject => {
  collatedTasks.find(task => task.key === selectedProject);
};
