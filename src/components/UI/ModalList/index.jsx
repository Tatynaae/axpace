import React from "react";
import "./ModalList.scss";

const ModalList = ({ list }) => {
  return (
    <div className="list_container">
      {list.map((el, idx) => (
        <div className="list_el" key={idx} onClick={el.function}>{el.title}</div>
      ))}
    </div>
  );
};

export default ModalList;
