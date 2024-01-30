import React from "react";
import { useThemeContext } from "../../../../context/ThemeContext";
import "./TimeCards.scss";

const TimeCards = ({ element }) => {
  const { theme } = useThemeContext();
  return (
    <div className={theme === "dark" ? "card-container" : "card-container-l"}>
      <div className={theme === "dark" ? "card-title" : "card-title-l"}>
        {element.title}
      </div>
      <div className={theme === "dark" ? "card-time" : "card-time-l"}>
        {element.time} <span>hours</span>
      </div>
      <div className={theme === "dark" ? "card-compare" : "card-compare-l"}>
        <span className={element.lot ? "green-icon" : "red-icon"}>
          {element.icon}
        </span>
        {element.compare}
      </div>
      <img src={element.image} alt="" className="card-image" />
    </div>
  );
};

export default TimeCards;
