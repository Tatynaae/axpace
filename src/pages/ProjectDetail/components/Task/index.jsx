import React, { useState } from "react";
import DeleteModal from "../DeleteModal";
import Overlay from "../../../../components/Overlay";
import PlusIcon from "../../../../assets/icons/PlusIcon";
import SharedIcon from "../../../../assets/icons/SharedIcon";
import PointsIcon from "../../../../assets/icons/PointsIcon";
import CommentIcon from "../../../../assets/icons/CommentIcon";
import "./Task.scss";

const Task = ({ task }) => {
  const [overlay, setOverlay] = useState(false);
  const [settingsModal, setSettingsModal] = useState(false);

  const toggleOverlay = () => {
    setOverlay(!overlay);
    setSettingsModal(false);
  };

  const toggleSettingsModal = () => {
    setSettingsModal(!settingsModal);
  };

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
                <div className="type">{el.type}</div>
                <div className="date">{el.date}</div>
              </div>
              <div className="block_third">
                <div className="block_third__text">GS-17</div>
              </div>
            </div>
          ))}
          <div className="addTask">
            <PlusIcon />
            <span>Add task </span>
          </div>
        </div>
      </div>
      {overlay && <Overlay close={toggleOverlay} children={<DeleteModal close={toggleOverlay}/>} />}
    </>
  );
};

export default Task;
