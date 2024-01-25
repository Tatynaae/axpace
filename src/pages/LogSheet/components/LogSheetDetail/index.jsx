import React from "react";
import { useNavigate } from "react-router-dom";
import ArrayLeftIcon from "../../../../assets/icons/ArrayLeftIcon";
import ProjectTitle from "../../../../components/UI/ProjectTitle";
import "./LogSheetDetail.scss";

const LogSheetDetail = () => {
  const navigate = useNavigate();
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
        <div className="l-s_detail_list">
          <div className="l-s_detail_list_row">
            <div className="l-s_detail_list_row_col gray">Task</div>
            <div className="l-s_detail_list_row_col gray">Hours</div>
          </div>
          {tasks.map((t, idx) => (
            <div className="l-s_detail_list_row" key={idx}>
              <div className="l-s_detail_list_row_col white">{t.taskTitle}</div>
              <div className="l-s_detail_list_row_col white">{t.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogSheetDetail;
