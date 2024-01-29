import React from "react";
import { useThemeContext } from "../../../context/ThemeContext";
import PlusIcon from "../../../assets/icons/PlusIcon";
import "./AddButton.scss";

const AddButton = ({ title, ...props }) => {
  const { theme } = useThemeContext();
  return (
    <div {...props} className={theme === 'dark' ? "addBtn-d" : 'addBtn-l'}>
      <PlusIcon />
      <span>{title}</span>
    </div>
  );
};

export default AddButton;
