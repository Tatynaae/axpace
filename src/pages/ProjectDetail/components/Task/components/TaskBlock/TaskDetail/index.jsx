import React, { useState, useRef, useEffect } from "react";
import { useMyProjectsContext } from "../../../../../../../context/MyProjectsContext";
import clsx from "clsx";
import PlusIcon from "../../../../../../../assets/icons/PlusIcon";
import MinusIcon from "../../../../../../../assets/icons/MinusIcon";
import SmileIcon from "../../../../../../../assets/icons/SmileIcon";
import AttachIcon from "../../../../../../../assets/icons/AttachIcon";
import MemberIcon from "../../../../../../../assets/icons/MemberIcon";
import ForwardIcon from "../../../../../../../assets/icons/ForwardIcon";
import AtSymbolIcon from "../../../../../../../assets/icons/AtSymbolIcon";
import AppointedIcon from "../../../../../../../assets/icons/AppointedIcon";
import TimesheetsIcon from "../../../../../../../assets/icons/TimesheetsIcon";
import TypographyIcon from "../../../../../../../assets/icons/TypographyIcon";
import ArrowRightIcon from "../../../../../../../assets/icons/ArrowRightIcon";
import DoublePointsIcon from "../../../../../../../assets/icons/DoublePointsIcon";
import "./TaskDetail.scss";

const TaskDetail = ({ task, project, taskStage, close }) => {
  const subtaskRef = useRef();
  const { setProjects, addCommentToTask } = useMyProjectsContext();
  const [subTask, setSubTask] = useState(false);
  const [subTaskTitle, setSubTaskTitle] = useState("");
  const [statusModal, setStatusModal] = useState(false);
  const [priorityModal, setPriorityModal] = useState(false);
  const [statusContent, setStatusContent] = useState(<MinusIcon />);
  const [priorityContent, setPriorityContent] = useState(<MinusIcon />);
  const [addComment, setAddComment] = useState(false);
  const [commentText, setCommentText] = useState("");

  const handleClickTaskDetail = (e) => {
    e.stopPropagation();
  };

  const handleChangeSubtaskInput = (e) => {
    setSubTaskTitle(e.target.value);
  };

  const toggleSubTask = () => {
    setSubTask(!subTask);
  };

  const handleAddSubTask = (projectId, taskId) => {
    const newSubTask = { id: task.subtasks.length + 1, title: subTaskTitle };
  
    setProjects((prevProjects) =>
      prevProjects.map((project) => {
        if (project.id === projectId) {
          const updatedTasks = project.tasks.map((task) => {
            if (task.id === taskId) {
              const updatedSubtasks = task.subtasks.concat(newSubTask);
              return { ...task, subtasks: updatedSubtasks };
            }
            return task;
          });
  
          return { ...project, tasks: updatedTasks };
        }
        return project;
      })
    );
  
    setSubTask(false);
    setSubTaskTitle("");
  };
  

  const createTask = () => {
    if (subTaskTitle.trim().length > 0) {
      handleAddSubTask(project.id, task.id);
    } else {
      toggleSubTask();
    }
  };

  const handleKeyDownSubTask = (e) => {
    if (e.key === "Enter") {
      handleAddSubTask(project.id, task.id);
    }
  };

  useEffect(() => {
    if (subTask) {
      subtaskRef.current.focus();
    }
  }, [subTask]);

  const priorityList = [
    { title: "Low" },
    { title: "Medium" },
    { title: "High" },
  ];

  const statusList = [
    { title: "todo" },
    { title: "doing" },
    { title: "completed" },
  ];

  const togglePriorityModal = () => {
    setPriorityModal(!priorityModal);
  };
  const setPriority = (content) => {
    setPriorityContent((prevContent) => content);
  };
  const toggleStatusModal = () => {
    setStatusModal(!statusModal);
  };
  const setStatus = (content) => {
    setStatusContent((prevContent) => content);
  };

  const handleFocusAddComment = () => {
    setAddComment(true);
  };

  const handleChangeAddComment = (e) => {
    setCommentText(e.target.value);
  };

  const handleAddComment = (e) => {
    e.stopPropagation();
    if (commentText.trim().length > 0) {
      addCommentToTask(project.id, task.id, {
        id: task.comments.length + 1,
        text: commentText,
      });
      setCommentText("");
    }
  };

  return (
    <div className="task-detail" onClick={handleClickTaskDetail}>
      <div className="task-detail_top">
        <div className="task-detail_top_left">
          <AppointedIcon />
          <span>Appointed</span>
        </div>
        <div className="task-detail_top_right">
          <div>
            <AttachIcon />
          </div>
          <div onClick={close}>
            <ForwardIcon />
          </div>
        </div>
      </div>

      <div className="task-detail_content">
        <div className="bread-crumbs">
          <span>Task </span>
          <span>
            <ArrowRightIcon />
          </span>
          <span>Subtask</span>
        </div>
        <h1 className="task-name">{task.title}</h1>
        <div className="about-task">
          <div className="about-task_info">
            <div className="about-task_info_left">Project</div>
            <div className="about-task_info_right">{project.title}</div>
          </div>
          <div className="about-task_info">
            <div className="about-task_info_left">Code</div>
            <div className="about-task_info_right">GS-17</div>
          </div>
          <div className="about-task_info">
            <div className="about-task_info_left">Assignee</div>
            <div className="about-task_info_Right">
              <span>
                <MemberIcon />
              </span>
              <span>No assignee</span>
            </div>
          </div>
          <div className="about-task_info">
            <div className="about-task_info_left">Due date</div>
            <div className="about-task_info_Right">
              <span>
                <TimesheetsIcon />
              </span>
              <span>No due date</span>
            </div>
          </div>
          <div className="about-task_info">
            <div className="about-task_info_left">Priority</div>
            <div
              className={`about-task_info_Right`}
              onClick={togglePriorityModal}
            >
              {priorityContent}
              {priorityModal ? (
                <div className="modal" onMouseLeave={togglePriorityModal}>
                  {priorityList.map((el, idx) => (
                    <div className="modal_elem" key={idx}>
                      <span
                        className={el.title.toLowerCase()}
                        onClick={() => setPriority(el.title)}
                      >
                        {el.title}
                      </span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
          <div className="about-task_info">
            <div className="about-task_info_left">Status</div>
            <div className="about-task_info_Right" onClick={toggleStatusModal}>
              {statusContent}
              {statusModal ? (
                <div className="modal" onMouseLeave={toggleStatusModal}>
                  {statusList.map((el) => (
                    <div className="modal_elem2">
                      <span onClick={() => setStatus(el.title)}>
                        {el.title}
                      </span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <textarea className="description" placeholder="Description"></textarea>

        <div className="subtask">
          <span>Subtask</span>

          {task.subtasks.map((subTask) => (
            <div className="subtask-title" key={subTask.id}>
              <div className="subtask-title_left">
                <DoublePointsIcon /> <span>{subTask.title}</span>
              </div>
              <div className="subtask-title_right">
                <AppointedIcon /> <ArrowRightIcon />
              </div>
            </div>
          ))}
          {subTask && (
            <input
              placeholder="Subtask name"
              onChange={handleChangeSubtaskInput}
              ref={subtaskRef}
              onKeyDown={(e) => handleKeyDownSubTask(e)}
            />
          )}
          <button onClick={createTask}>
            <PlusIcon /> <span>Add subtask</span>
          </button>
        </div>
      </div>

      <div className="comments">
        <div className="comments_all">
          {
            task.comments.map(comment => (
              <div className="comments_all_comment">
                <div className="comments_all_comment_top">
                  <div className="user-image">JS</div>
                  <div className="user-name">User name</div>
                  <div className="circle"></div>
                  <div className="comment-date">81 minutes ago</div>
                </div>
                <div className="comments_all_comment_bottom">{comment.text}</div>
              </div>
            )) 
          }
        </div>
        <div className={clsx("comment")}>
          <div className={addComment ? "addComment" : ""}>
            <textarea
              className="addCommentTextarea"
              placeholder="Add a comment"
              value={commentText}
              onChange={(e) => handleChangeAddComment(e)}
              onFocus={handleFocusAddComment}
            ></textarea>
            {addComment ? (
              <div className="addComment_add">
                <div className="addComment_add_left">
                  <div>
                    <PlusIcon />
                  </div>
                  <div>
                    <TypographyIcon />
                  </div>
                  <div>
                    <SmileIcon />
                  </div>
                  <div>
                    <AtSymbolIcon />
                  </div>
                  <div>
                    <AttachIcon />
                  </div>
                </div>
                <div className="addComment_add_right">
                  <button
                    className="success-btn"
                    onClick={(e) => handleAddComment(e)}
                  >
                    Comment
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
