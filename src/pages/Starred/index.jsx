import React from "react";
import { useMyProjectsContext } from "../../context/MyProjectsContext";
import { useNavigate } from "react-router-dom";
import Frame from "../../components/UI/Frame";
import MyTasks from "../Home/components/MyTasks";
import ProjectTitle from "../../components/UI/ProjectTitle";
import "./Starred.scss";

const Starred = () => {
  const navigate = useNavigate();
  const { projects } = useMyProjectsContext();
  const starredProjects = projects.filter((project) => project.starred);

  return (
    <div className="starred-projects_container">
      {starredProjects.length > 0 ? (
        starredProjects.map((project) => (
          <div
            className="projects_element"
            onClick={() =>
              navigate(`/projects/${project.title}-${project.id}`)
            }
            key={project.id}
          >
            <Frame
              title={<ProjectTitle title={project.title} />}
              children={<MyTasks />}
            />
          </div>
        ))
      ) : (
        <div className="empty_container"></div>
      )}
    </div>
  );
};

export default Starred;
