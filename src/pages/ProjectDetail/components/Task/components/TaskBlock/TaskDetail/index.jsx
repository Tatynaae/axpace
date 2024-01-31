import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { useMyProjectsContext } from "../../../../../../../context/MyProjectsContext";
import { useThemeContext } from "../../../../../../../context/ThemeContext";
import PlusIcon from "../../../../../../../assets/icons/PlusIcon";
import Status from "../../../../../../../components/UI/Status";
import MinusIcon from "../../../../../../../assets/icons/MinusIcon";
import SmileIcon from "../../../../../../../assets/icons/SmileIcon";
import ModalList from "../../../../../../../components/UI/ModalList";
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

const TaskDetail = ({ task, project, close }) => {
  const subtaskRef = useRef();
  const { theme } = useThemeContext();
  const { setProjects, addCommentToTask, setTaskStatus, setTaskPriority } =
    useMyProjectsContext();
  const [subTask, setSubTask] = useState(false);
  const [subTaskTitle, setSubTaskTitle] = useState("");
  const [stageModal, setStageModal] = useState(false);
  const [priorityModal, setPriorityModal] = useState(false);
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
    {
      title: "Low",
      element: <Status text={"Low"} />,
      function: () => setTaskPriority(project.id, task.id, "Low"),
    },
    {
      title: "Medium",
      element: <Status text={"Medium"} />,
      function: () => setTaskPriority(project.id, task.id, "Medium"),
    },
    {
      title: "High",
      element: <Status text={"High"} />,
      function: () => setTaskPriority(project.id, task.id, "High"),
    },
  ];

  const statusList = [
    {
      title: "On track",
      element: <Status text={"On track"} />,
      function: () => setTaskStatus(project.id, task.id, "On track"),
    },
    {
      title: "At risk",
      element: <Status text={"At risk"} />,
      function: () => setTaskStatus(project.id, task.id, "At risk"),
    },
    {
      title: "Off track",
      element: <Status text={"Off track"} />,
      function: () => setTaskStatus(project.id, task.id, "Off track"),
    },
    {
      title: "On hold",
      element: <Status text={"On hold"} />,
      function: () => setTaskStatus(project.id, task.id, "On hold"),
    },
  ];

  const togglePriorityModal = () => {
    setPriorityModal(!priorityModal);
  };
  const setPriority = (content) => {
    setPriorityContent((prevContent) => content);
  };
  const toggleStageModal = () => {
    setStageModal(!stageModal);
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
    <div
      className={clsx(
        "task-detail",
        theme === "dark" ? "task-detail-d" : "task-detail-l"
      )}
      onClick={handleClickTaskDetail}
    >
      <div
        className={clsx(
          "task-detail_top",
          theme === "dark" ? "task-detail_top-d" : "task-detail_top-l"
        )}
      >
        <div className="left">
          <AppointedIcon />
          <span>Appointed</span>
        </div>
        <div className="right">
          <div>
            <AttachIcon />
          </div>
          <div onClick={close}>
            <ForwardIcon />
          </div>
        </div>
      </div>

      <div className="task-detail_content">
        <div className={theme === "dark" ? "bread-crumbs-d" : "bread-crumbs-l"}>
          <span>Task </span>
          <span>
            <ArrowRightIcon />
          </span>
          <span>Subtask</span>
        </div>
        <h1
          className="task-name"
          style={{
            color: theme === "dark" ? "#fafafa" : "#1E1F21",
          }}
        >
          {task.title}
        </h1>
        <div className="about-task">
          <div className="about-task_info">
            <div
              className={
                theme === "dark"
                  ? "about-task_info_left"
                  : "about-task_info_left-l"
              }
            >
              Project
            </div>
            <div
              className={
                theme === "dark"
                  ? "about-task_info_right"
                  : "about-task_info_right-l"
              }
            >
              {project.title}
            </div>
          </div>
          <div className="about-task_info">
            <div
              className={
                theme === "dark"
                  ? "about-task_info_left"
                  : "about-task_info_left-l"
              }
            >
              Code
            </div>
            <div
              className={
                theme === "dark"
                  ? "about-task_info_right"
                  : "about-task_info_right-l"
              }
            >
              GS-17
            </div>
          </div>
          <div className="about-task_info">
            <div
              className={
                theme === "dark"
                  ? "about-task_info_left"
                  : "about-task_info_left-l"
              }
            >
              Assignee
            </div>
            <div
              className={
                theme === "dark"
                  ? "about-task_info_Right"
                  : "about-task_info_Right-l"
              }
            >
              <span>
                <MemberIcon />
              </span>
              <span>No assignee</span>
            </div>
          </div>
          <div className="about-task_info">
            <div
              className={
                theme === "dark"
                  ? "about-task_info_left"
                  : "about-task_info_left-l"
              }
            >
              Due date
            </div>
            <div
              className={
                theme === "dark"
                  ? "about-task_info_Right"
                  : "about-task_info_Right-l"
              }
            >
              <span>
                <TimesheetsIcon />
              </span>
              <span>No due date</span>
            </div>
          </div>
          <div className="about-task_info">
            <div
              className={
                theme === "dark"
                  ? "about-task_info_left"
                  : "about-task_info_left-l"
              }
            >
              Priority
            </div>
            <div
              className={
                theme === "dark"
                  ? "about-task_info_Right"
                  : "about-task_info_Right-l"
              }
              onClick={togglePriorityModal}
            >
              {task.priority ? <Status text={task.priority} /> : <MinusIcon />}
              {priorityModal ? (
                <div className="modal" onMouseLeave={togglePriorityModal}>
                  <ModalList list={priorityList} />
                </div>
              ) : null}
            </div>
          </div>
          <div className="about-task_info">
            <div
              className={
                theme === "dark"
                  ? "about-task_info_left"
                  : "about-task_info_left-l"
              }
            >
              Status
            </div>
            <div
              className={
                theme === "dark"
                  ? "about-task_info_Right"
                  : "about-task_info_Right-l"
              }
              onClick={toggleStageModal}
            >
              {task.status ? <Status text={task.status} /> : <MinusIcon />}
              {stageModal ? (
                <div className="modal" onMouseLeave={toggleStageModal}>
                  <ModalList list={statusList} />
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <textarea
          className={theme === "dark" ? "description-d" : "description-l"}
          placeholder="Description"
        ></textarea>

        <div className={theme === "dark" ? "subtask-d" : "subtask-l"}>
          <span>Subtask</span>

          {task.subtasks.map((subTask) => (
            <div className="subtask-title" key={subTask.id}>
              <div
                className={
                  theme === "dark"
                    ? "subtask-title_left"
                    : "subtask-title_left-l"
                }
              >
                <DoublePointsIcon /> <span>{subTask.title}</span>
              </div>
              <div
                className={
                  theme === "dark"
                    ? "subtask-title_right"
                    : "subtask-title_right-l"
                }
              >
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
        <div
          className={clsx(
            "comments_all",
            theme === "dark" ? "comments-d" : "comments-l"
          )}
        >
          {task.comments.map((comment) => (
            <div className="comments_all_comment">
              <div className="comments_all_comment_top">
                <div className="user-image">JS</div>
                <div
                  className={theme === "dark" ? "user-name-d" : "user-name-l"}
                >
                  User name
                </div>
                <div className="circle"></div>
                <div
                  className={
                    theme === "dark" ? "comment-date-d" : "comment-date-l"
                  }
                >
                  81 minutes ago
                </div>
              </div>
              <div
                className={
                  theme === "dark"
                    ? "comments_all_comment_bottom-d"
                    : "comments_all_comment_bottom-l"
                }
              >
                {comment.text}
              </div>
            </div>
          ))}
        </div>
        <div className={theme === "dark" ? "comment-d" : "comment-l"}>
          <div
            className={clsx(
              addComment ? "addComment" : "",
              theme === "dark" ? "addComment-d" : "addComment-l"
            )}
          >
            <textarea
              className={
                theme === "dark"
                  ? "addCommentTextarea-d"
                  : "addCommentTextarea-l"
              }
              placeholder="Add a comment"
              value={commentText}
              onChange={(e) => handleChangeAddComment(e)}
              onFocus={handleFocusAddComment}
            ></textarea>
            {addComment ? (
              <div className="addComment_add">
                <div
                  className={
                    theme === "dark"
                      ? "addComment_add_left-d"
                      : "addComment_add_left-l"
                  }
                >
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
                    className={
                      theme === "dark" ? "success-btn" : "success-btn-l"
                    }
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
