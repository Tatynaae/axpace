import React, { useEffect, useRef, useState } from "react";
import { useThemeContext } from "../../../../../../context/ThemeContext";
import clsx from "clsx";
import Assign from "../Assign";
import TaskDetail from "./TaskDetail";
import Overlay from "../../../../../../components/Overlay";
import ModalList from "../../../../../../components/UI/ModalList";
import PointsIcon from "../../../../../../assets/icons/PointsIcon";
import SharedIcon from "../../../../../../assets/icons/SharedIcon";
import CommentIcon from "../../../../../../assets/icons/CommentIcon";
import MoveRightArrowIcon from "../../../../../../assets/icons/MoveRightArrowIcon";
import "./TaskBlock.scss";

const TaskBlock = ({ task, project, sections, onDelete }) => {
  const { theme } = useThemeContext();
  const [edit, setEdit] = useState(false);
  const [move, setMove] = useState(false);
  const [rename, setRename] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [newTaskName, setNewTaskName] = useState("");
  const [overlay, setOverlay] = useState(false);
  const renameInputRef = useRef(null);

  const toggleEditModal = (e) => {
    e.stopPropagation();
    setEditModal(!editModal);
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
    e.preventDefault();
    setNewTaskName(e.target.value);
  };

  const handleRenameKeyDown = (e) => {
    if (e.key === "Enter") {
      task.title = newTaskName;
      setRename(false);
      setEditModal(false);
    }
  };

  const openTask = () => {
    setOverlay(true);
  };

  const closeOverlay = () => {
    setOverlay(false);
  };

  useEffect(() => {
    if (rename && renameInputRef.current) {
      renameInputRef.current.focus();
      renameInputRef.current.select();
      setEditModal(false);
    }
  }, [rename]);

  const setList = [
    { title: "Rename", function: openRename },
    { title: "Delete task", function: () => onDelete(task.id) },
    { title: "Copy link", function: null },
    {
      title: "Move",
      icon: <MoveRightArrowIcon />,
      hover: () => setMove(true),
    },
  ];
  return (
    <>
      <div
        className={clsx("block", theme === "dark" ? "d-block" : "l-block")}
        onClick={openTask}
        onMouseOver={() => setEdit(true)}
        onMouseLeave={handleLeaveBlock}
      >
        <div
          className={theme === "dark" ? "block_taskName-d" : "block_taskName-l"}
        >
          {rename ? (
            <input
              type="text"
              ref={renameInputRef}
              className={theme === "dark" ? "d-rename" : '"l-rename"'}
              defaultValue={task.title}
              onBlur={() => setRename(false)}
              onChange={(e) => handleRenameChange(e)}
              onKeyDown={handleRenameKeyDown}
              onClick={(e) => e.preventDefault()}
            />
          ) : (
            <p>{task.title}</p>
          )}
          {edit && (
            <div
              className={theme === "dark" ? "editTask-d" : "editTask-l"}
              onClick={(e) => toggleEditModal(e)}
            >
              <PointsIcon />
              {editModal && (
                <div className="list">
                  <ModalList list={setList} />
                  {move && (<div className="second-list"><ModalList list={sections}/></div> )}
                </div>
              )}
            </div>
          )}
        </div>
        {(task.status || task.priority) && (
          <div className="block_first">
            <div className="block_first_left">
              {task.status ? (
                <div className={theme === "dark" ? "status-d" : "status-l"}>
                  {task.status}
                </div>
              ) : null}
              {task.priority ? (
                <div className="priority">{task.priority}</div>
              ) : null}
            </div>
            <div className="block_first_right">
              {task.comments !== 0 && (
                <div className={theme === "dark" ? "comments-d" : "comments-l"}>
                  <span>{task.comments.length}</span>
                  <CommentIcon />
                </div>
              )}
              <div className={theme === "dark" ? "shared-d" : "shared-l"}>
                <span>2</span>
                <SharedIcon />
              </div>
            </div>
          </div>
        )}
        <div className="block_second">
          <Assign project={project} />
          <div className={theme === "dark" ? "date-d" : "date-l"}>
            {task.date}
          </div>
        </div>
        <div className="block_third">
          <div
            className={
              theme === "dark" ? "block_third__text-d" : "block_third__text-l"
            }
          >
            GS-17
          </div>
        </div>
      </div>
      {overlay ? (
        <Overlay full={true} close={closeOverlay}>
          <TaskDetail
            close={closeOverlay}
            task={task}
            project={project}
            taskStage={task.status.toLowerCase()}
          />
        </Overlay>
      ) : null}
    </>
  );
};

export default TaskBlock;
