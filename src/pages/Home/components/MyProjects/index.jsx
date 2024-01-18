import React from "react";
import PlusIcon from "../../../../assets/icons/PlusIcon";
import ProjectTitle from "../../../../components/UI/ProjectTitle";
import "./MyProjects.scss";

const MyProjects = ({ allMyProjects }) => {
  return (
    <div className="myProjects">
      <div className="create">
        <div className="create_icon">
          <PlusIcon />
        </div>
        <span>Create project</span>
      </div>
      {allMyProjects.map((el) => (
        <ProjectTitle
          title={el.title}
          path={`/projects/${el.title}-${el.id}`}
        />
      ))}
    </div>
  );
};

export default MyProjects;
