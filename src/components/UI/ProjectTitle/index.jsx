import React from "react";
import { useThemeContext } from "../../../context/ThemeContext";
import "./ProjectTitle.scss";

const ProjectTitle = ({ title }) => {
  const { theme } = useThemeContext();
  return (
    <div className="project-title">
      <div className="project-title_icon">N</div>
      <span className={theme === 'dark' ? 'darkTitle' : 'lightTitle'}>{title}</span>
    </div>
  );
};

export default ProjectTitle;
