import React from "react";
import { useThemeContext } from "../../../context/ThemeContext";
import "./BorderedInput.scss";

const BorderedInput = ({ ...props }) => {
  const { theme } = useThemeContext();
  return (
    <input
      {...props}
      className={theme === "dark" ? "bordered-input" : "bordered-input-l"}
    />
  );
};

export default BorderedInput;
