import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectTitle from "../../components/UI/ProjectTitle";
import "./LogSheet.scss";

const LogSheets = () => {
  const navigate = useNavigate();
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
        <div className="page-title">Log sheets</div>
        <div className="log-sheet_cards">
          {projects.map((el, idx) => (
            <div
              className="log-sheet_card"
              key={idx}
              onClick={() => navigate("/log-sheets/Project Name")}
            >
              {el.project}
              <div className="log-sheet_card_time">
                <span>{el.time} </span>
                hours All time
              </div>
            </div>
          ))}
        </div>
        <div className="log-sheet_lists">
          <h3 className="log-sheet_lists_title">All tasks</h3>
          <div className="log-sheet_lists_list">
            <div className="row">
              <div className="row_col gray">Project</div>
              <div className="row_col gray">Task</div>
              <div className="row_col gray">Hours</div>
            </div>
            {list.map((l, idx) => (
              <div className="row" key={idx}>
                <div className="row_col white">{l.projectsTitle}</div>
                <div className="row_col white">{l.taskTitle}</div>
                <div className="row_col white">{l.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogSheets;
