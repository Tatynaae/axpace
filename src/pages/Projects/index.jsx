import React from "react";
import { useNavigate } from "react-router-dom";
import Frame from "../../components/UI/Frame";
import MyTasks from "../Home/components/MyTasks";
import ProjectTitle from "../../components/UI/ProjectTitle";
import "./Projects.scss";

const Projects = () => {
  const allMyProjects = [
    { id: 1, title: "Project name" },
    { id: 2, title: "Project name" },
    { id: 3, title: "Project name" },
  ];

  const navigate = useNavigate();
  return (
    <div className="projects_container">
      {allMyProjects.map((project) => (
        <div
          className="projects_element"
          onClick={() => navigate(`/projects/${project.title}`)}
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
