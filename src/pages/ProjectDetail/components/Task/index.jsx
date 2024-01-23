import React, { useEffect, useRef, useState } from "react";
import DeleteModal from "../DeleteModal";
import TaskBlock from "./components/TaskBlock";
import Overlay from "../../../../components/Overlay";
import PlusIcon from "../../../../assets/icons/PlusIcon";
import PointsIcon from "../../../../assets/icons/PointsIcon";
import "./Task.scss";

const Task = ({
  section,
  sections,
  project,
  onAddTask,
  onDeleteTask,
  onDeleteSection,
  onRenameSection,
}) => {
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
      if (newTask.trim() !== "") {
        onAddTask(newTask, section);
        setNewTask("");
        setNewTaskBlock(false);
      }
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
      const inputElement = document.getElementById(`renameInput-${section.id}`);
      if (inputElement) {
        inputElement.focus();
      }
    }
  }, [renameSection, section.id]);

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
      onRenameSection(section.id, trimmedNewSectionName);
      setRenameSection(false);
    } else {
      setNewSectionName(section.title);
      setRenameSection(false);
    }
  };

  const handleRenameInputKeyDown = (e) => {
    if (e.key === "Enter") {
      const trimmedNewSectionName = newSectionName.trim();
      if (trimmedNewSectionName !== "") {
        onRenameSection(section.id, trimmedNewSectionName);
        setRenameSection(false);
      } else {
        setNewSectionName(section.title);
        setRenameSection(false);
      }
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
                id={`renameInput-${section?.id}`}
                className="renameSectionInput"
                defaultValue={section.sectionTitle}
                value={newSectionName || section.sectionTitle}
                onChange={handleRenameInputChange}
                onBlur={handleRenameInputBlur}
                onKeyDown={handleRenameInputKeyDown}
              />
            </div>
          ) : (
            <div className="task_head__left">{section.sectionTitle}</div>
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
          {section.tasks.map((el) => (
            <TaskBlock
              task={el}
              key={el.id}
              project={project}
              sections={sections}
              onDelete={onDeleteTask}
            />
          ))}

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
        <Overlay close={toggleOverlay}>
          <DeleteModal
            close={toggleOverlay}
            onDelete={() => onDeleteSection(section.id)}
          />
        </Overlay>
      )}
    </>
  );
};

export default Task;
