import React, { useState } from "react";
import Overlay from "../../../../components/Overlay";
import PlusIcon from "../../../../assets/icons/PlusIcon";
import ProjectTitle from "../../../../components/UI/ProjectTitle";
import CreateProject from "../../../../components/UI/CreateProject";
import { useMyProjectsContext } from "../../../../context/MyProjectsContext";
import "./MyProjects.scss";

const MyProjects = () => {
  const { projects } = useMyProjectsContext();
  const [overlay, setOverlay] = useState(false);

  const toggleOverlay = () => {
    setOverlay(!overlay);
  };

  return (
    <>
      <div className="myProjects">
        <div className="create" onClick={toggleOverlay}>
          <div className="create_icon">
            <PlusIcon />
          </div>
          <span>Create project</span>
        </div>
        {projects.map((el) => (
          <ProjectTitle
            key={el.id}
            title={el.title}
            path={`/projects/${el.title}-${el.id}`}
          />
        ))}
      </div>
      {overlay ? (
        <Overlay close={toggleOverlay}>
          <CreateProject close={toggleOverlay} />
        </Overlay>
      ) : null}
    </>
  );
};

export default MyProjects;
