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
      starred: false,
      archived: false,
      members: [
        { id: 1, name: "Sultanbekova Janylai", image: user1 },
        { id: 2, name: "Janylai Sultanbekova", image: user2 },
        { id: 3, name: "Sultanbekova Janylai", image: user3 },
      ],
      tasks: [
        {
          title: "Task name 1",
          id: 1,
          date: "Oct 4-7",
          assign: "JS",
          status: "todo",
          priority: "priority",
          comments: [
            {
              id: 1,
              text: "Bla Bla Bla",
            },
          ],
          subtasks: [],
          responsible: [],
        },
        {
          title: "Task name doing 1",
          id: 2,
          date: "Oct 4-7",
          assign: "JS",
          status: "doing",
          priority: "priority",
          comments: [
            {
              id: 1,
              text: "Bla Bla Bla",
            },
          ],
          subtasks: [],
          responsible: [],
        },
        {
          title: "Task name completed 1",
          id: 3,
          date: "Oct 4-7",
          assign: "JS",
          status: "completed",
          priority: "priority",
          comments: [
            {
              id: 1,
              text: "Bla Bla Bla",
            },
          ],
          subtasks: [],
          responsible: [],
        },
        {
          title: "Task name completed 1",
          id: 4,
          date: "Oct 4-7",
          assign: "JS",
          status: "completed",
          priority: "priority",
          comments: [
            {
              id: 1,
              text: "Bla Bla Bla",
            },
          ],
          subtasks: [],
          responsible: [],
        },
      ],
    },
    {
      id: 2,
      title: "Project-2 name",
      starred: false,
      archived: false,
      members: [
        { id: 1, name: "Sultanbekova Janylai", image: user1 },
        { id: 2, name: "Sultanbekova Janylai", image: user2 },
        { id: 3, name: "Sultanbekova Janylai", image: user3 },
      ],
      tasks: [
        {
          title: "Task name 2",
          id: 1,
          date: "Oct 4-7",
          assign: "JS",
          status: "todo",
          priority: "priority",
          comments: [
            {
              id: 1,
              text: "Bla Bla Bla",
            },
          ],
          subtasks: [],
          responsible: [],
        },
        {
          title: "Task name doing 2",
          id: 2,
          date: "Oct 4-7",
          assign: "JS",
          status: "doing",
          priority: "priority",
          comments: [
            {
              id: 1,
              text: "Bla Bla Bla",
            },
          ],
          subtasks: [],
          responsible: [],
        },
        {
          title: "Task name completed 2",
          id: 3,
          date: "Oct 4-7",
          assign: "JS",
          status: "completed",
          priority: "priority",
          comments: [
            {
              id: 1,
              text: "Bla Bla Bla",
            },
          ],
          subtasks: [],
          responsible: [],
        },
      ],
    },
    {
      id: 3,
      title: "Project-3 name",
      starred: false,
      archived: false,
      members: [
        { id: 1, name: "Sultanbekova Janylai", image: user1 },
        { id: 2, name: "Sultanbekova Janylai", image: user2 },
        { id: 3, name: "Sultanbekova Janylai", image: user3 },
      ],
      tasks: [
        {
          title: "Task name 3",
          id: 1,
          date: "Oct 4-7",
          assign: "JS",
          status: "todo",
          priority: "priority",
          comments: [
            {
              id: 1,
              text: "Bla Bla Bla",
            },
          ],
          subtasks: [],
          responsible: [],
        },
        {
          title: "Task name doing 3",
          id: 2,
          date: "Oct 4-7",
          assign: "JS",
          status: "doing",
          priority: "priority",
          comments: [
            {
              id: 1,
              text: "Bla Bla Bla",
            },
          ],
          subtasks: [],
          responsible: [],
        },
        {
          title: "Task name doing 3",
          id: 3,
          date: "Oct 4-7",
          assign: "JS",
          status: "doing",
          priority: "priority",
          comments: [
            {
              id: 1,
              text: "Bla Bla Bla",
            },
          ],
          subtasks: [],
          responsible: [],
        },
        {
          title: "Task name completed 3",
          id: 4,
          date: "Oct 4-7",
          assign: "JS",
          status: "completed",
          priority: "priority",
          comments: [
            {
              id: 1,
              text: "Bla Bla Bla",
            },
          ],
          subtasks: [],
          responsible: [],
        },
      ],
    },
  ]);

  const createProject = (newProjectTitle) => {
    const newProject = {
      id: projects.length + 1,
      title: newProjectTitle,
      starred: false,
      archived: false,
      members: [],
      tasks: [],
    };
    setProjects([...projects, newProject]);
  };
  const archiveProject = (projectId) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId ? { ...project, archived: true } : project
      )
    );
  };
  const starProject = (projectId) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId ? { ...project, starred: true } : project
      )
    );
  };
  const nonStarProject = (projectId) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId ? { ...project, starred: false } : project
      )
    );
  };
  const getTasks = (status) => {
    return projects.map((project) => ({
      ...project,
      tasks: project.tasks.filter((task) => task.status === status),
    }));
  };
  const addCommentToTask = (projectId, taskId, newComment) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) => {
        if (project.id === projectId) {
          const updatedTasks = project.tasks.map((task) => {
            if (task.id === taskId) {
              const newComments = [...task.comments, newComment];
              return { ...task, comments: newComments };
            }
            return task;
          });
  
          return { ...project, tasks: updatedTasks };
        }
        return project;
      })
    );
  };

  return (
    <myProjects.Provider
      value={{
        projects,
        setProjects,
        createProject,
        getTasks,
        archiveProject,
        starProject,
        nonStarProject,
        addCommentToTask
      }}
    >
      {children}
    </myProjects.Provider>
  );
};
