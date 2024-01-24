import React from "react";
import "./TimeCards.scss";

const TimeCards = ({ element }) => {
  return (
    <div className="card-container">
      <div className="card-title">{element.title}</div>
      <div className="card-time">
        {element.time} <span>hours</span>
      </div>
      <div className="card-compare">
        <span className={element.lot ? "green-icon" : "red-icon"}>
          {element.icon}
        </span>
        {element.compare}
      </div>
      <img src={element.image} alt="" className="card-image"/>
    </div>
  );
};

export default TimeCards;
