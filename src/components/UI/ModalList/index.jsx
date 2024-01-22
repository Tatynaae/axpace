import React from "react";
import "./ModalList.scss";

const ModalList = ({ list }) => {
  return (
    <div className="list_container">
      {list.map((el) => (
        <div className="list_el">{el}</div>
      ))}
    </div>
  );
};

export default ModalList;
