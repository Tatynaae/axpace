import React from "react";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../context/ThemeContext";
import ProjectTitle from "../../components/UI/ProjectTitle";
import "./LogSheet.scss";
import clsx from "clsx";

const LogSheets = () => {
  const navigate = useNavigate();
  const { theme } = useThemeContext();
  const projects = new Array(4).fill({
    project: (
      <ProjectTitle title={"Project Name"} path="/log-sheets/Project Name" />
    ),
    time: "240",
  });

  const list = [
    {
      projectsTitle: <ProjectTitle title="Project Name" />,
      taskTitle: "Task name quam nihil molestiae consequatu",
      time: "6h 50m",
    },
    {
      projectsTitle: <ProjectTitle title="Project Name" />,
      taskTitle: "Task name quam nihil molestiae consequatu",
      time: "6h 50m",
    },
    {
      projectsTitle: <ProjectTitle title="Project Name" />,
      taskTitle: "Task name quam nihil molestiae consequatu",
      time: "6h 50m",
    },
    {
      projectsTitle: <ProjectTitle title="Project Name" />,
      taskTitle: "Task name quam nihil molestiae consequatu",
      time: "6h 50m",
    },
    {
      projectsTitle: <ProjectTitle title="Project Name" />,
      taskTitle: "Task name quam nihil molestiae consequatu",
      time: "6h 50m",
    },
    {
      projectsTitle: <ProjectTitle title="Project Name" />,
      taskTitle: "Task name quam nihil molestiae consequatu",
      time: "6h 50m",
    },
    {
      projectsTitle: <ProjectTitle title="Project Name" />,
      taskTitle: "Task name quam nihil molestiae consequatu",
      time: "6h 50m",
    },
  ];

  return (
    <div className="log-sheet">
      <div className="log-sheet_container">
        <div className={theme === "dark" ? "page-title" : "page-title-l"}>
          Log sheets
        </div>
        <div className="log-sheet_cards">
          {projects.map((el, idx) => (
            <div
              className={
                theme === "dark" ? "log-sheet_card" : "log-sheet_card-l"
              }
              key={idx}
              onClick={() => navigate("/log-sheets/Project Name")}
            >
              {el.project}
              <div
                className={
                  theme === "dark"
                    ? "log-sheet_card_time"
                    : "log-sheet_card-l_time"
                }
              >
                <span>{el.time} </span>
                hours All time
              </div>
            </div>
          ))}
        </div>
        <div className="log-sheet_lists">
          <h3
            className={
              theme === "dark"
                ? "log-sheet_lists_title"
                : "log-sheet_lists_title-l"
            }
          >
            All tasks
          </h3>
          <div
            className={
              theme === "dark"
                ? "log-sheet_lists_list"
                : "log-sheet_lists_list-l"
            }
          >
            <div className={theme === "dark" ? "row" : "row-l"}>
              <div
                className={clsx(
                  theme === "dark" ? "row_col" : "row-l_col",
                  theme === "dark" ? "gray" : "gray-l"
                )}
              >
                Project
              </div>
              <div
                className={clsx(
                  theme === "dark" ? "row_col" : "row-l_col",
                  theme === "dark" ? "gray" : "gray-l"
                )}
              >
                Task
              </div>
              <div
                className={clsx(
                  theme === "dark" ? "row_col" : "row-l_col",
                  theme === "dark" ? "gray" : "gray-l"
                )}
              >
                Hours
              </div>
            </div>
            {list.map((l, idx) => (
              <div className={theme === "dark" ? "row" : "row-l"} key={idx}>
                <div
                  className={clsx(
                    theme === "dark" ? "row_col" : "row-l_col",
                    theme === "dark" ? "white" : "dark-white"
                  )}
                >
                  {l.projectsTitle}
                </div>
                <div
                  className={clsx(
                    theme === "dark" ? "row_col" : "row-l_col",
                    theme === "dark" ? "white" : "dark-white"
                  )}
                >
                  {l.taskTitle}
                </div>
                <div
                  className={clsx(
                    theme === "dark" ? "row_col" : "row-l_col",
                    theme === "dark" ? "white" : "dark-white"
                  )}
                >
                  {l.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogSheets;
