import React, { useEffect, useRef, useState } from "react";
import Assign from "../Assign";
import PointsIcon from "../../../../../../assets/icons/PointsIcon";
import SharedIcon from "../../../../../../assets/icons/SharedIcon";
import CommentIcon from "../../../../../../assets/icons/CommentIcon";
import MoveRightArrowIcon from "../../../../../../assets/icons/MoveRightArrowIcon";
import "./TaskBlock.scss";

const TaskBlock = ({ el }) => {
  const [edit, setEdit] = useState(false);
  const [move, setMove] = useState(false);
  const [rename, setRename] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [newTaskName, setNewTaskName] = useState("");

  const renameInputRef = useRef(null);

  const openEditModal = () => {
    setEditModal(true);
  };

  const closeEditModal = () => {
    setEditModal(false);
  };

  const handleLeaveBlock = () => {
    setEdit(false);
    closeEditModal();
  };

  const openRename = () => {
    setRename(true);
  };

  const handleRenameChange = (e) => {
    setNewTaskName(e.target.value);
  };

  const handleRenameKeyDown = (e) => {
    if (e.key === "Enter") {
      el.title = newTaskName;
      setRename(false);
      setEditModal(false);
    }
  };

  useEffect(() => {
    if (rename && renameInputRef.current) {
      renameInputRef.current.focus();
      renameInputRef.current.select();
      setEditModal(false);
    }
  }, [rename]);

  return (
    <div
      className="block"
      onMouseOver={() => setEdit(true)}
      onMouseLeave={handleLeaveBlock}
    >
      <div className="block_taskName">
        {rename ? (
          <input
            type="text"
            ref={renameInputRef}
            className="rename"
            defaultValue={el.title}
            onBlur={() => setRename(false)}
            onChange={handleRenameChange}
            onKeyDown={handleRenameKeyDown}
          />
        ) : (
          <p>{el.title}</p>
        )}
        {edit && (
          <div className="editTask" onClick={openEditModal}>
            <PointsIcon />
            {editModal && (
              <div className="list">
                <span onClick={openRename}>Rename</span>
                <span>Delete task</span>
                <span>Copy link</span>
                <span
                  onMouseOver={() => setMove(true)}
                  onMouseLeave={() => setMove(false)}
                >
                  Move
                  <MoveRightArrowIcon />
                  {move && (
                    <div className="list second-list">
                      <span>Section name</span>
                      <span>Section name</span>
                      <span>Section name</span>
                    </div>
                  )}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
      {(el.status || el.priority) && (
        <div className="block_first">
          <div className="block_first_left">
            {el.status && <div className="status">Status</div>}
            {el.priority && <div className="priority">Priority</div>}
          </div>
          <div className="block_first_right">
            {el.comments !== 0 && (
              <div className="comments">
                <span>{el.comments.length}</span>
                <CommentIcon />
              </div>
            )}
            <div className="shared">
              <span>2</span>
              <SharedIcon />
            </div>
          </div>
        </div>
      )}
      <div className="block_second">
        <Assign el={el} />
        <div className="date">{el.date}</div>
      </div>
      <div className="block_third">
        <div className="block_third__text">GS-17</div>
      </div>
    </div>
  );
};

export default TaskBlock;
