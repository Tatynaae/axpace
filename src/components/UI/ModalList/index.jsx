import React from "react";
import { useThemeContext } from "../../../context/ThemeContext";
import "./ModalList.scss";

const ModalList = ({ list }) => {
  const { theme } = useThemeContext();
  const click = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      className={
        theme === "dark" ? "dark-list_container" : "light-list_container"
      }
      onClick={(e) => click(e)}
    >
      {list.map((el, idx) => (
        <div
          className="list_el"
          key={idx}
          onClick={el?.function}
          onMouseOver={el.hover}
        >
          {el.title || el.sectionTitle}
          {el.icon ? el.icon : null}
        </div>
      ))}
    </div>
  );
};

export default ModalList;
