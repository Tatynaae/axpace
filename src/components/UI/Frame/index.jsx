import React from "react";
import clsx from "clsx";
import { useThemeContext } from "../../../context/ThemeContext";
import "./Frame.scss";

const Frame = ({ children, title, className }) => {
  const { theme } = useThemeContext();
  return (
    <div
      className={clsx(
        className,
        theme === "dark" ? "dark-frame" : "light-frame"
      )}
    >
      <h1 className="title">{title}</h1>
      {children}
    </div>
  );
};

export default Frame;
