import React, { createContext, useState, useContext } from "react";

const myProjects = createContext();

export const useMyProjectsContext = () => {
  return useContext(myProjects);
};

export const MyProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Project-1 name",
      members: [
        "Sultanbekova Janylai",
        "Sultanbekova Janylai",
        "Sultanbekova Janylai",
      ],
      tasks: [
        { title: "Task name 1" },
        { title: "Task name 1" },
        { title: "Task name 1" },
      ],
      completed: [
        { title: "Task name" },
        { title: "Task name" },
        { title: "Task name" },
      ],
    },
    {
      id: 2,
      title: "Project-2 name",
      members: [
        "Sultanbekova Janylai",
        "Sultanbekova Janylai",
        "Sultanbekova Janylai",
      ],
      tasks: [
        { title: "Task name 2" },
        { title: "Task name 2" },
        { title: "Task name 2" },
      ],
      completed: [
        { title: "Task name 2" },
        { title: "Task name 2" },
        { title: "Task name 2" },
      ],
    },
    {
      id: 3,
      title: "Project-3 name",
      tasks: [
        { title: "Task name 3" },
        { title: "Task name 3" },
        { title: "Task name 3" },
      ],
      completed: [
        { title: "Task name 3" },
        { title: "Task name 3" },
        { title: "Task name 3" },
      ],
    },
    {
      id: 4,
      title: "Project-4 name",
      members: [
        "Sultanbekova Janylai",
        "Sultanbekova Janylai",
        "Sultanbekova Janylai",
      ],
      tasks: [
        { title: "Task name 4" },
        { title: "Task name 4" },
        { title: "Task name 4" },
      ],
      completed: [
        { title: "Task name 4" },
        { title: "Task name 4" },
        { title: "Task name 4" },
      ],
    },
  ]);

  return (
    <myProjects.Provider value={{ projects, setProjects }}>
      {children}
    </myProjects.Provider>
  );
};
