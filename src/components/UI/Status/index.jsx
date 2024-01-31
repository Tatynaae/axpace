import React from "react";
import "./Status.scss";

const Status = ({ text }) => {
  if (text === "On track") {
    return <div className="greenStatus">{text}</div>;
  } else if (text === "Off track") {
    return <div className="redStatus">{text}</div>;
  } else if (text === "At risk") {
    return <div className="yellowStatus">{text}</div>;
  } else if (text === "On hold") {
    return <div className="blueStatus">{text}</div>;
  }
  return null;
};

export default Status;
