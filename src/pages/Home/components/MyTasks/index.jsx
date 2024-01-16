import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../../../context/ThemeContext";
import Tabs from "../../../../components/UI/Tabs";
import TodoIcon from "../../../../assets/icons/TodoIcon";
import "./MyTasks.scss";

const myTasks = [
  {
    title: "Todo",
    value: "Todo",
    tasks: [
      {
        taskName: "Task name",
        projectName: "Project name",
      },
      {
        taskName: "Task name",
        projectName: "Project name",
      },
      {
        taskName: "Task name",
        projectName: "Project name",
      },
      {
        taskName: "Task name",
        projectName: "Project name",
      },
      {
        taskName: "Task name",
        projectName: "Project name",
      },
    ],
  },
  {
    title: "Completed",
    value: "Completed",
    tasks: [
      {
        taskName: "Task name completed",
        projectName: "Project name",
      },
      {
        taskName: "Task name completed",
        projectName: "Project name",
      },
      {
        taskName: "Task name completed",
        projectName: "Project name",
      },
      {
        taskName: "Task name completed",
        projectName: "Project name",
      },
      {
        taskName: "Task name completed",
        projectName: "Project name",
      },
    ],
  },
];

const MyTasks = () => {
  const { theme } = useThemeContext();
  const [isActive, setIsActive] = useState(myTasks[0].value);

  const handleActive = (value) => {
    setIsActive(value);
  };
  return (
    <>
      <Tabs
        variant="underline"
        list={myTasks}
        onSelect={handleActive}
        isActive={isActive}
      />
      <div className="tasks">
        {isActive === "Todo" &&
          myTasks[0].tasks.map((el) => (
            <div
              className={clsx(
                "task-gen",
                theme === "dark" ? "dark-task" : "light-task"
              )}
            >
              <div className="task-gen_left">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: theme === "light" ? "#666A6E" : "#88949B",
                  }}
                >
                  <TodoIcon />
                </div>
                <span className={theme === "dark" ? "darkName" : "lightName"}>
                  {el.taskName}
                </span>
              </div>
              <div className="project-name">{el.projectName}</div>
            </div>
          ))}

        {isActive === "Completed" &&
          myTasks[1].tasks.map((el) => (
            <div
              className={clsx(
                "task-gen",
                theme === "dark" ? "dark-task" : "light-task"
              )}
            >
              <div className="task-gen_left">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: theme === "light" ? "#666A6E" : "#88949B",
                  }}
                >
                  <TodoIcon />
                </div>
                <span className={theme === "dark" ? "darkName" : "lightName"}>
                  {el.taskName}
                </span>
              </div>
              <div className="project-name">{el.projectName}</div>
            </div>
          ))}

        <Link to={"#"} className="show">
          Show more
        </Link>
      </div>
    </>
  );
};

export default MyTasks;
