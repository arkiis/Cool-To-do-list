import { collatedTasks } from "../constants/index";

export const collectedTaskExist = selectedProject => {
  collatedTasks.find(task => task.key === selectedProject);
};
