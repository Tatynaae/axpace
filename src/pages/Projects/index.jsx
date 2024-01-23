import React from "react";
import { useNavigate } from "react-router-dom";
import { useMyProjectsContext } from "../../context/MyProjectsContext";
import Frame from "../../components/UI/Frame";
import MyTasks from "../Home/components/MyTasks";
import ProjectTitle from "../../components/UI/ProjectTitle";
import "./Projects.scss";

const Projects = () => {
  const { projects } = useMyProjectsContext();
  const nonArchivedProjects = projects.filter((project) => !project.archived);

  const navigate = useNavigate();
  return (
    <div className="projects_container">
      {nonArchivedProjects.map((project) => (
        <div
          className="projects_element"
          onClick={() => navigate(`/projects/${project.title}-${project.id}`)}
          key={project.id}
        >
          <Frame
            title={<ProjectTitle title={project.title} />}
            children={<MyTasks />}
          />
        </div>
      ))}
    </div>
  );
};

export default Projects;
