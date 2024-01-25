import React from "react";
import "./BorderedInput.scss";

const BorderedInput = ({ ...props }) => {
  return <input {...props} className="bordered-input"/>;
};

export default BorderedInput;
