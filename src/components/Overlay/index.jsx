import React from "react";
import { useThemeContext } from "../../context/ThemeContext";
import "./Overlay.scss";

const Overlay = ({ children, close }) => {
  const { theme } = useThemeContext();

  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="overlay">
      <div
        className={
          theme === "dark"
            ? "overlay_dark-container"
            : "overlay_light-container"
        }
        onClick={close}
      >
        <div className="child" onClick={(e) => handleClick(e)}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Overlay;
