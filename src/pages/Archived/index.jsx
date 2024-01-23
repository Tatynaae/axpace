import React from "react";
import { useNavigate } from "react-router-dom";
import { useMyProjectsContext } from "../../context/MyProjectsContext";
import ProjectTitle from "../../components/UI/ProjectTitle";
import MyTasks from "../Home/components/MyTasks";
import Frame from "../../components/UI/Frame";
import "./Archived.scss";

const Archived = () => {
  const { projects } = useMyProjectsContext();
  const navigate = useNavigate();
  const archivedProjects = projects.filter((project) => project.archived);

  return (
    <div className="archived-projects_container">
      {archivedProjects.length > 0 ? (
        archivedProjects.map((project) => (
          <div
            className="projects_element"
            onClick={() => navigate(`/projects/archive/${project.title}-${project.id}`)}
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

export default Archived;
