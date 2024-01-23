import React, { useState } from "react";
import { useMyProjectsContext } from "../../../../context/MyProjectsContext";
import RadioIcon from "../../../../assets/icons/RadioIcon";
import ArrowDown from "../../../../assets/icons/ArrowDown";
import "./DeleteModal.scss";

const DeleteModal = ({ close, onDelete}) => {
  const { projects } = useMyProjectsContext();
  const [selected, setSelected] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [option, setOption] = useState(null);

  const handleSelect1 = () => {
    setSelected(1);
    setOpenModal(false);
  };

  const handleSelect2 = () => {
    setSelected(2);
    setOpenModal(true);
  };

  const handleSetOption = (e, title) => {
    e.stopPropagation();
    setOption(title);
    setOpenModal(false);
  };

  const handleCencel = () => {
    close();
  };

  const handleDelete = () => {
    onDelete();
    close();
  };

  return (
    <div className="deleteModal">
      <div className="deleteModal_title">Delete this section?</div>
      <div className="deleteModal_q1" onClick={() => handleSelect1(1)}>
        {selected === 1 ? <RadioIcon /> : <div className="unSelected"></div>}
        <p>Delete section and delete 2 tasks</p>
      </div>
      <div className="deleteModal_q2" onClick={() => handleSelect2(2)}>
        {selected === 2 ? <RadioIcon /> : <div className="unSelected"></div>}
        <p>Delete section and delete 2 tasks</p>
        <div className="rename">
          <span>{option ? option : "Rename"}</span>
          <ArrowDown />
          {openModal ? (
            <div className="sections" onClick={() => setOpenModal(!openModal)}>
              {projects.map((project) => (
                <span
                  onClick={(e) => handleSetOption(e, project.title)}
                  key={project.id}
                >
                  {project.title}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <div className="deleteModal_btns">
        <button className="cencel-btn" onClick={handleCencel}>
          Cancel
        </button>
        <button className="success-btn" onClick={handleDelete}>
          Delete section
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
