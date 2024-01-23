import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../../../context/ThemeContext";
import { useMyProjectsContext } from "../../../../context/MyProjectsContext";
import Tabs from "../../../../components/UI/Tabs";
import TodoIcon from "../../../../assets/icons/TodoIcon";
import "./MyTasks.scss";

const MyTasks = () => {
  const { theme } = useThemeContext();
  const { getTasks } = useMyProjectsContext();
  const [isActive, setIsActive] = useState("Todo");

  const myTasks = [
    {
      title: "Todo",
      value: "Todo",
      tasks: getTasks("todo"),
    },
    {
      title: "Completed",
      value: "Completed",
      tasks: getTasks("completed"),
    },
  ];

  const handleActive = (value) => {
    setIsActive(value);
  };

  return (
    <div className="my-tasks">
      <Tabs
        variant="underline"
        list={myTasks}
        onSelect={handleActive}
        isActive={isActive}
      />
      <div className="tasks">
        {isActive &&
          myTasks
            .find((task) => task.value === isActive)
            ?.tasks?.map((el) => {
              return el.tasks.map((task) => (
                <div
                  className={clsx(
                    "task-gen",
                    theme === "dark" ? "dark-task" : "light-task"
                  )}
                  key={el.projectName}
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
                    <span
                      className={theme === "dark" ? "darkName" : "lightName"}
                    >
                      {task.title}
                    </span>
                  </div>
                  <div className="project-name">{el.title}</div>
                </div>
              ));
            })}
      </div>
      <Link to={"#"} className="show">
        Show more
      </Link>
    </div>
  );
};

export default MyTasks;
