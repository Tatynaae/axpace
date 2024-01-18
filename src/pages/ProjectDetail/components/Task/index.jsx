import React, { useEffect, useRef, useState } from "react";
import DeleteModal from "../DeleteModal";
import TaskBlock from "./components/TaskBlock";
import Overlay from "../../../../components/Overlay";
import PlusIcon from "../../../../assets/icons/PlusIcon";
import PointsIcon from "../../../../assets/icons/PointsIcon";
import "./Task.scss";

const Task = ({ task, project, onDeleteSection, onRenameSection }) => {
  const [newTask, setNewTask] = useState("");
  const [overlay, setOverlay] = useState(false);
  const [newTaskBlock, setNewTaskBlock] = useState(false);
  const [settingsModal, setSettingsModal] = useState(false);
  const [renameSection, setRenameSection] = useState(false);
  const [newSectionName, setNewSectionName] = useState("");

  const textareaRef = useRef(null);
  const toggleOverlay = () => {
    setOverlay(!overlay);
    setSettingsModal(false);
  };

  const toggleSettingsModal = () => {
    setSettingsModal(!settingsModal);
  };

  const toggleNewTask = () => {
    setNewTaskBlock(!newTaskBlock);
  };

  const handleTextareaBlur = () => {
    setNewTaskBlock(false);
  };

  const handleTextareaChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleTextareaKeyDown = (e) => {
    if (e.key === "Enter" && newTaskBlock === true) {
      setNewTask("");
      setNewTaskBlock(false);
    }
  };

  const handleDeleteSectionClick = () => {
    toggleOverlay();
  };

  useEffect(() => {
    if (newTaskBlock && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [newTaskBlock]);

  useEffect(() => {
    if (renameSection) {
      const inputElement = document.getElementById(`renameInput-${task.id}`);
      if (inputElement) {
        inputElement.focus();
      }
    }
  }, [renameSection, task.id]);

  const handleRenameSectionClick = () => {
    setRenameSection(true);
    setSettingsModal(false);
  };

  const handleRenameInputChange = (e) => {
    setNewSectionName(e.target.value);
  };

  const handleRenameInputBlur = () => {
    const trimmedNewSectionName = newSectionName.trim();
    if (trimmedNewSectionName !== "") {
      onRenameSection(task.id, task.title, trimmedNewSectionName);
      setRenameSection(false);
    } else {
      setNewSectionName(task.title);
      setRenameSection(false);
    }
  };

  const handleRenameInputKeyDown = (e) => {
    if (e.key === "Enter") {
      onRenameSection(task.id, task.title, newSectionName);
      setRenameSection(false);
    }
  };

  return (
    <>
      <div className="task">
        <div className="task_head">
          {renameSection ? (
            <div className="task_head__left">
              <input
                type="text"
                id={`renameInput-${task.id}`}
                className="renameSectionInput"
                value={newSectionName || task.title}
                onChange={handleRenameInputChange}
                onBlur={handleRenameInputBlur}
                onKeyDown={handleRenameInputKeyDown}
              />
            </div>
          ) : (
            <div className="task_head__left">{task.title}</div>
          )}

          <div className="task_head__right">
            <div>
              <PlusIcon />
            </div>
            <div onClick={toggleSettingsModal}>
              <PointsIcon />
            </div>
            {settingsModal && (
              <div className="settingsModal">
                <span onClick={handleRenameSectionClick}>Rename</span>
                <span onClick={handleDeleteSectionClick}>Delete section</span>
                <span>Hide section</span>
              </div>
            )}
          </div>
        </div>
        <div className="task_content">
          {Array.isArray(task.tasks) &&
            task.tasks.map((el) => <TaskBlock el={el} key={el.id} />)}

          {newTaskBlock && (
            <div className="newBlock block">
              <textarea
                placeholder="Write task name"
                ref={textareaRef}
                onBlur={handleTextareaBlur}
                onChange={(e) => handleTextareaChange(e)}
                onKeyDown={(e) => handleTextareaKeyDown(e)}
              ></textarea>
            </div>
          )}

          <div className="addTask" onClick={toggleNewTask}>
            <PlusIcon />
            <span>Add task </span>
          </div>
        </div>
      </div>
      {overlay && (
        <Overlay
          close={toggleOverlay}
          children={
            <DeleteModal
              close={toggleOverlay}
              onDelete={onDeleteSection}
              projectId={project.id}
              taskTitle={task.title}
            />
          }
        />
      )}
    </>
  );
};

export default Task;
