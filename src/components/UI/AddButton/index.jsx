import React from "react";
import PlusIcon from "../../../assets/icons/PlusIcon";
import "./AddButton.scss";

const AddButton = ({ title, ...props }) => {
  return (
    <div {...props} className="addBtn">
      <PlusIcon />
      <span>{title}</span>
    </div>
  );
};

export default AddButton;
