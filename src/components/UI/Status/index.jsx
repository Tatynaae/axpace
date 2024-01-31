import React from "react";
import "./Status.scss";

const Status = ({ text }) => {
  const variant = {
    greenStatus: "On track",
    redStatus: "Off track",
    yellowStatus: "At risk",
    blueStatus: "On hold",
  };

  return <div className={variant[text]}>Status</div>;
};

export default Status;
