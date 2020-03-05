/* eslint-disable no-nested-ternary */
import { useState, useEffect } from "react";
import moment from "moment";
import { firebase } from "../firebase";
import { collatedTasksExist } from "../helpers";

export const useTasks = selectedProject => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    const userId = firebase.auth().currentUser.uid;
    let unsubscribe = firebase
      .firestore()
      .collection("tasks")
      .where("userId", "==", userId);

    unsubscribe =
      selectedProject && !collatedTasksExist(selectedProject)
        ? (unsubscribe = unsubscribe.where("projectId", "==", selectedProject))
        : selectedProject === "TODAY"
        ? (unsubscribe = unsubscribe.where(
            "date",
            "==",
            moment().format("DD/MM/YYYY")
          ))
        : selectedProject === "INBOX" || selectedProject === 0
        ? (unsubscribe = unsubscribe.where("date", "==", ""))
        : unsubscribe;

    unsubscribe = unsubscribe.onSnapshot(snapshot => {
      const newTasks = snapshot.docs.map(task => ({
        id: task.id,
        ...task.data()
      }));

      setTasks(
        selectedProject === "NEXT_7"
          ? newTasks.filter(
              task =>
                moment(task.date, "DD-MM-YYYY").diff(moment(), "days") <= 7 &&
                task.archived !== true
            )
          : newTasks.filter(task => task.archived !== true)
      );
      setArchivedTasks(newTasks.filter(task => task.archived !== false));
    });

    return () => unsubscribe();
  }, [selectedProject]);

  return { tasks, archivedTasks };
};

export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  if (firebase.auth().currentUser !== null)
    console.log("user id: " + firebase.auth().currentUser.uid);

  useEffect(() => {
    const userId = firebase.auth().currentUser.uid;
    firebase
      .firestore()
      .collection("projects")
      .where("userId", "==", userId)
      .orderBy("projectId")
      .get()
      .then(snapshot => {
        const allProjects = snapshot.docs.map(project => ({
          ...project.data(),
          docId: project.id
        }));

        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects);
        }
      });
  }, [projects]);

  return { projects, setProjects };
};

//Fetch hook
export const useFetchAPI = endpoint => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    fetching();
  }, [fetching]);

  const fetching = async () => {
    let endpointValue = await fetch(endpoint);
    let response = await endpointValue.json();
    setValue(response);
  };

  return value;
};
