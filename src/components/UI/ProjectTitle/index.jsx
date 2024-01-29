import React from "react";
import { useThemeContext } from "../../../context/ThemeContext";
import "./ProjectTitle.scss";
import { useNavigate } from "react-router-dom";

const ProjectTitle = ({ title, path, ...props }) => {
  const navigate = useNavigate();
  const { theme } = useThemeContext();

  const handleNavigate = () => {
    navigate(path);
  };

  return (
    <div className="project-title" onClick={handleNavigate} {...props}>
      <div
        className="project-title_icon"
        style={{
          backgroundColor: theme === "dark" ? "#2a57c8" : "#4683F7",
        }}
      >
        N
      </div>
      <span className={theme === "dark" ? "darkTitle" : "lightTitle"}>
        {title}
      </span>
    </div>
  );
};

export default ProjectTitle;
