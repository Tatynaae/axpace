import React from "react";
import clsx from "clsx";
import { useThemeContext } from "../../../context/ThemeContext";
import "./Tabs.scss";

const Tabs = ({ list, variant, isActive, onSelect }) => {
  const { theme } = useThemeContext();
  const variantColor = {
    underline: theme === "dark" ? "dark-underline" : "light-underline",
  };
  const selectTab = (e, value) => {
    e.stopPropagation();
    onSelect?.(value);
  };

  return (
    <div className="tab-container">
      {list.map((el) => {
        const active = isActive === el.value;
        return (
          <div
            key={el.value}
            className={clsx(
              theme === "dark" ? "dark-item" : "light-item",
              active && variantColor[variant]
            )}
            onClick={(e) => selectTab(e, el.value)}
          >
            {el.title}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
