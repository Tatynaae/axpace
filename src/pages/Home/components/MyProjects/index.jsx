import React from "react";
import PlusIcon from "../../../../assets/icons/PlusIcon";
import ProjectTitle from "../../../../components/UI/ProjectTitle";
import "./MyProjects.scss";

export const allMyProjects = new Array(3).fill("Project Name");

const MyProjects = () => {
  return (
    <div className="myProjects">
      <div className="create">
        <div className="create_icon">
          <PlusIcon />
        </div>
        <span>Create project</span>
      </div>
      {allMyProjects.map((el) => (
        <ProjectTitle title={el} />
      ))}
    </div>
  );
};

export default MyProjects;
