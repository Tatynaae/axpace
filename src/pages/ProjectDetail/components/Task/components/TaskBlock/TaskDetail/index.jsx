import React, { useState, useRef, useEffect } from "react";
import PlusIcon from "../../../../../../../assets/icons/PlusIcon";
import MinusIcon from "../../../../../../../assets/icons/MinusIcon";
import AttachIcon from "../../../../../../../assets/icons/AttachIcon";
import ForwardIcon from "../../../../../../../assets/icons/ForwardIcon";
import AppointedIcon from "../../../../../../../assets/icons/AppointedIcon";
import ArrowRightIcon from "../../../../../../../assets/icons/ArrowRightIcon";
import DoublePointsIcon from "../../../../../../../assets/icons/DoublePointsIcon";
import { useMyProjectsContext } from "../../../../../../../context/MyProjectsContext";
import "./TaskDetail.scss";

const TaskDetail = ({ task, project, taskStage }) => {
  const { setProjects } = useMyProjectsContext();
  const [subTask, setSubTask] = useState(false);
  const [subTaskTitle, setSubTaskTitle] = useState("");
  const subtaskRef = useRef();

  const handleClickTaskDetail = (e) => {
    e.stopPropagation();
  };

  const handleChangeSubtaskInput = (e) => {
    setSubTaskTitle(e.target.value);
  };

  const toggleSubTask = () => {
    setSubTask(!subTask);
  };

  const handleAddSubTask = (taskId) => {
    console.log("test", taskId);
    const newSubTask = { title: subTaskTitle };
    setProjects((prevProject) => {
      return prevProject?.map((item) => {
        if (item?.id === project?.id) {
          let s = item?.tasks[taskStage]?.map((t) => {
            if (t?.id === taskId) {
              t.subtasks = [...t.subtasks, newSubTask];
            }
            return t;
          });

          return {
            ...item,
            tasks: {
              ...item.tasks,
              [taskStage]: s,
            },
          };
        }
      });
    });

    setSubTask(false);
    setSubTaskTitle("");
  };

  const createTask = () => {
    if (subTaskTitle.trim().length === 0) {
      toggleSubTask();
    } else {
      handleAddSubTask(task?.id);
    }
  };

  const handleKeyDownSubTask = (e) => {
    if (e.key === "Enter") {
      handleAddSubTask(task?.id);
    }
  };

  useEffect(() => {
    if (subTask) {
      subtaskRef.current.focus();
    }
  }, [subTask]);

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
          <div>
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
            <div className="about-task_info_Right">No assignee</div>
          </div>
          <div className="about-task_info">
            <div className="about-task_info_left">Due date</div>
            <div className="about-task_info_Right">No due date</div>
          </div>
          <div className="about-task_info">
            <div className="about-task_info_left">Priority</div>
            <div className="about-task_info_Right">
              <MinusIcon />
            </div>
          </div>
          <div className="about-task_info">
            <div className="about-task_info_left">Status</div>
            <div className="about-task_info_Right">
              <MinusIcon />
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

      <div className="comment">
        <textarea placeholder="Add a comment"></textarea>
      </div>
    </div>
  );
};

export default TaskDetail;
