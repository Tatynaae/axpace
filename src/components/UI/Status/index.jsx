import React from "react";
import "./Status.scss";

const Status = ({ text }) => {
  if (text === "On track" || text === "Low") {
    return <div className="greenStatus">{text}</div>;
  } else if (text === "Off track" || text === "High") {
    return <div className="redStatus">{text}</div>;
  } else if (text === "At risk" || text === "Medium") {
    return <div className="yellowStatus">{text}</div>;
  } else if (text === "On hold") {
    return <div className="blueStatus">{text}</div>;
  }
  return null;
};

export default Status;
