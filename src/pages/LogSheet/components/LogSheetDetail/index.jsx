import React from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../../../context/ThemeContext";
import ArrayLeftIcon from "../../../../assets/icons/ArrayLeftIcon";
import ProjectTitle from "../../../../components/UI/ProjectTitle";
import "./LogSheetDetail.scss";

const LogSheetDetail = () => {
  const navigate = useNavigate();
  const { theme } = useThemeContext();
  const tasks = [
    {
      taskTitle: "Task name quam nihil molestiae consequatu",
      time: "6h 50m",
    },
    {
      taskTitle: "Task name quam nihil molestiae consequatu",
      time: "6h 50m",
    },
    {
      taskTitle: "Task name quam nihil molestiae consequatu",
      time: "6h 50m",
    },
    {
      taskTitle: "Task name quam nihil molestiae consequatu",
      time: "6h 50m",
    },
    {
      taskTitle: "Task name quam nihil molestiae consequatu",
      time: "6h 50m",
    },
    {
      taskTitle: "Task name quam nihil molestiae consequatu",
      time: "6h 50m",
    },
    {
      taskTitle: "Task name quam nihil molestiae consequatu",
      time: "6h 50m",
    },
  ];

  return (
    <div className="l-s_detail">
      <div className="l-s_detail_container">
        <div
          className="gray l-s_detail_back"
          onClick={() => navigate("/log-sheets")}
        >
          <ArrayLeftIcon />
        </div>
        <ProjectTitle title={"Project Name"} />
        <div
          className={clsx("l-s_detail_list", theme === "dark" ? "l-d" : "l-l")}
        >
          <div
            className={
              theme === "dark" ? "l-s_detail_list_row" : "l-s_detail_list_row-l"
            }
          >
            <div
              className={clsx(
                theme === "dark"
                  ? "l-s_detail_list_row_col"
                  : "l-s_detail_list_row-l_col",
                theme === "dark" ? "gray" : "gray-l"
              )}
            >
              Task
            </div>
            <div
              className={clsx(
                theme === "dark"
                  ? "l-s_detail_list_row_col"
                  : "l-s_detail_list_row-l_col",
                theme === "dark" ? "gray" : "gray-l"
              )}
            >
              Hours
            </div>
          </div>
          {tasks.map((t, idx) => (
            <div
              className={
                theme === "dark"
                  ? "l-s_detail_list_row"
                  : "l-s_detail_list_row-l"
              }
              key={idx}
            >
              <div
                className={clsx(
                  theme === "dark"
                    ? "l-s_detail_list_row_col"
                    : "l-s_detail_list_row-l_col",
                  theme === "dark" ? "white" : "dark-white"
                )}
              >
                {t.taskTitle}
              </div>
              <div
                className={clsx(
                  theme === "dark"
                    ? "l-s_detail_list_row_col"
                    : "l-s_detail_list_row-l_col",
                  theme === "dark" ? "white" : "dark-white"
                )}
              >
                {t.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogSheetDetail;
