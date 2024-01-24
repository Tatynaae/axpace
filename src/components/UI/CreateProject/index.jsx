import React, { useEffect, useRef, useState } from "react";
import { useMyProjectsContext } from "../../../context/MyProjectsContext";
import CloseIcon from "../../../assets/icons/CloseIcon";
import "./CreateProject.scss";

const CreateProject = ({ close }) => {
  const { createProject } = useMyProjectsContext();

  const [newProjectTitle, setNewProjectTitle] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  
  const handleChangeTitleOfProject = (e) => {
    setNewProjectTitle(e.target.value);
  };

  const create = () => {
    createProject(newProjectTitle);
    close();
  };

  const cencel = () => {
    setNewProjectTitle("");
    close();
  };
  return (
    <div className="create-project">
      <div className="create-project_top">
        <span>Create project</span>
        <div className="close" onClick={close}>
          <CloseIcon />
        </div>
      </div>

      <div className="create-project_content">
        <span>Project name</span>
        <input
          ref={inputRef}
          type="text"
          placeholder="Placeholder_input"
          onChange={(e) => handleChangeTitleOfProject(e)}
        />
      </div>

      <div className="create-project_bottom">
        <button className="cencel-btn" onClick={cencel}>
          Cancel
        </button>
        <button className="success-btn" onClick={create}>
          Create project
        </button>
      </div>
    </div>
  );
};

export default CreateProject;
