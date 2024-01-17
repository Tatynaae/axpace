import React, { useEffect, useRef, useState } from "react";
import Assign from "./components/Assign";
import DeleteModal from "../DeleteModal";
import Overlay from "../../../../components/Overlay";
import PlusIcon from "../../../../assets/icons/PlusIcon";
import SharedIcon from "../../../../assets/icons/SharedIcon";
import PointsIcon from "../../../../assets/icons/PointsIcon";
import CommentIcon from "../../../../assets/icons/CommentIcon";
import "./Task.scss";

const Task = ({ task, allTasks }) => {
  const [overlay, setOverlay] = useState(false);
  const [newTaskBlock, setNewTaskBlock] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [settingsModal, setSettingsModal] = useState(false);

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

  const handleTextareaKeyDown = (e, index) => {
    if (e.key === "Enter" && newTaskBlock === true) {
      allTasks.map(
        (task) =>
          task.id === index &&
          task.tasks.push({
            id: task.tasks[task.tasks.length - 1].id + 1,
            taskName: newTask,
            date: "Oct 4-7",
            type: "JS",
            status: true,
            priority: false,
            comments: 0,
          })
      );
      setNewTask("");
      setNewTaskBlock(false);
    }
  };

  useEffect(() => {
    if (newTaskBlock && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [newTaskBlock]);

  return (
    <>
      <div className="task">
        <div className="task_head">
          <div className="task_head__left">{task.title}</div>
          <div className="task_head__right">
            <div>
              <PlusIcon />
            </div>
            <div onClick={toggleSettingsModal}>
              <PointsIcon />
            </div>
            {settingsModal && (
              <div className="settingsModal">
                <span>Rename</span>
                <span onClick={toggleOverlay}>Delete section</span>
                <span>Hide section</span>
              </div>
            )}
          </div>
        </div>
        <div className="task_content">
          {task.tasks.map((el) => (
            <div className="block">
              <p>{el.taskName}</p>
              {(el.status || el.priority) && (
                <div className="block_first">
                  <div className="block_first_left">
                    {el.status && <div className="status">Status</div>}
                    {el.priority && <div className="priority">Priority</div>}
                  </div>
                  <div className="block_first_right">
                    {el.comments !== 0 && (
                      <div className="comments">
                        <span>{el.comments}</span>
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
          ))}

          {newTaskBlock && (
            <div className="newBlock block">
              <textarea
                placeholder="Write task name"
                ref={textareaRef}
                onBlur={handleTextareaBlur}
                onChange={(e) => handleTextareaChange(e)}
                onKeyDown={(e) => handleTextareaKeyDown(e, task.id)}
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
          children={<DeleteModal close={toggleOverlay} />}
        />
      )}
    </>
  );
};

export default Task;
