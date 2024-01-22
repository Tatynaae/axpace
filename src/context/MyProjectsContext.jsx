import React, { createContext, useState, useContext } from "react";

import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.png";
import user3 from "../assets/images/user3.png";

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
        { id: 1, name: "Sultanbekova Janylai", image: user1 },
        { id: 2, name: "Sultanbekova Janylai", image: user2 },
        { id: 3, name: "Sultanbekova Janylai", image: user3 },
      ],
      tasks: {
        todo: [
          {
            title: "Task name 1",
            id: 1,
            date: "Oct 4-7",
            assign: "JS",
            status: "todo",
            priority: "priority",
            comments: ["Bla Bla Bla"],
            subtasks: [],
          },
        ],
        doing: [
          {
            title: "Task name doing 1",
            id: 1,
            date: "Oct 4-7",
            assign: "JS",
            status: "doing",
            priority: "priority",
            comments: ["Bla Bla Bla"],
            subtasks: [],
          },
        ],
        completed: [
          {
            title: "Task name completed 1",
            id: 1,
            date: "Oct 4-7",
            assign: "JS",
            status: "completed",
            priority: "priority",
            comments: ["Bla Bla Bla"],
            subtasks: [],
          },
        ],
      },
    },
    {
      id: 2,
      title: "Project-2 name",
      members: [
        { id: 1, name: "Sultanbekova Janylai", image: user1 },
        { id: 2, name: "Sultanbekova Janylai", image: user2 },
        { id: 3, name: "Sultanbekova Janylai", image: user3 },
      ],
      tasks: {
        todo: [
          {
            title: "Task name 2",
            id: 1,
            date: "Oct 4-7",
            assign: "JS",
            status: "status",
            priority: "priority",
            comments: ["Bla Bla Bla"],
            subtasks: [],
          },
        ],
        doing: [
          {
            title: "Task name doing 2",
            id: 1,
            date: "Oct 4-7",
            assign: "JS",
            status: "status",
            priority: "priority",
            comments: ["Bla Bla Bla"],
            subtasks: [],
          },
        ],
        completed: [
          {
            title: "Task name completed 2",
            id: 1,
            date: "Oct 4-7",
            assign: "JS",
            status: "status",
            priority: "priority",
            comments: ["Bla Bla Bla"],
            subtasks: [],
          },
        ],
      },
    },
    {
      id: 3,
      title: "Project-3 name",
      members: [
        { id: 1, name: "Sultanbekova Janylai", image: user1 },
        { id: 2, name: "Sultanbekova Janylai", image: user2 },
        { id: 3, name: "Sultanbekova Janylai", image: user3 },
      ],
      tasks: {
        todo: [
          {
            title: "Task name 3",
            id: 1,
            date: "Oct 4-7",
            assign: "JS",
            status: "status",
            priority: "priority",
            comments: ["Bla Bla Bla"],
            subtasks: [],
          },
        ],
        doing: [
          {
            title: "Task name doing 3",
            id: 1,
            date: "Oct 4-7",
            assign: "JS",
            status: "status",
            priority: "priority",
            comments: ["Bla Bla Bla"],
            subtasks: [],
          },
          {
            title: "Task name doing 3",
            id: 2,
            date: "Oct 4-7",
            assign: "JS",
            status: "status",
            priority: "priority",
            comments: ["Bla Bla Bla"],
            subtasks: [],
          },
        ],
        completed: [
          {
            title: "Task name completed 3",
            id: 1,
            date: "Oct 4-7",
            assign: "JS",
            status: "status",
            priority: "priority",
            comments: ["Bla Bla Bla"],
            subtasks: [],
          },
        ],
      },
    },
  ]);

  return (
    <myProjects.Provider value={{ projects, setProjects }}>
      {children}
    </myProjects.Provider>
  );
};
