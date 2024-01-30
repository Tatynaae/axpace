import React, { useState } from "react";
import { useThemeContext } from "../../../../context/ThemeContext";
import Overlay from "../../../../components/Overlay";
import EditIcon from "../../../../assets/icons/EditIcon";
import PlusIcon from "../../../../assets/icons/PlusIcon";
import CloseIcon from "../../../../assets/icons/CloseIcon";
import DeleteIcon from "../../../../assets/icons/DeleteIcon";
import BorderedInput from "../../../../components/UI/BorderedInput";
import DoublePointsIcon from "../../../../assets/icons/DoublePointsIcon";
import "./Milestones.scss";
import clsx from "clsx";

const Milestones = () => {
  const { theme } = useThemeContext();
  const [create, setCreate] = useState(false);
  const list = [
    {
      title: "Planning",
      start: "03.07.2023",
      dead: "25.11.2023",
      tasks: "260",
      pending: "50",
      completed: "210",
    },
    {
      title: "Design",
      start: "03.07.2023",
      dead: "25.11.2023",
      tasks: "150",
      pending: "6",
      completed: "144",
    },
    {
      title: "Development",
      start: "03.07.2023",
      dead: "25.11.2023",
      tasks: "84",
      pending: "0",
      completed: "84",
    },
    {
      title: "Testing",
      start: "03.07.2023",
      dead: "25.11.2023",
      tasks: "125",
      pending: "0",
      completed: "125",
    },
  ];

  const toggleCreateModal = () => {
    setCreate(!create);
  };

  return (
    <>
      <div className="milestones">
        <div className="milestones_head">
          <button
            onClick={toggleCreateModal}
            className={theme === "dark" ? "create-btn" : "create-btn-l"}
          >
            <PlusIcon />
            Create milestones
          </button>
        </div>
        <div className="milestones_list">
          <div
            className={
              theme === "dark"
                ? "milestones_list-head"
                : "milestones_list-head-l"
            }
          >
            <div className="doublepoints"></div>
            <div>Name</div>
            <div>Start date</div>
            <div>Deadline</div>
            <div>All tasks</div>
            <div>Pending</div>
            <div>Completed</div>
            <div>Edit</div>
          </div>
          <div className="milestones_list-body">
            {list.map((el, idx) => (
              <div
                className={
                  theme === "dark"
                    ? "milestones_list-element"
                    : "milestones_list-element-l"
                }
                key={idx}
              >
                <div
                  className="doublepoints"
                  style={{
                    color: theme === "dark" ? "#88949b" : "#1E1F21",
                  }}
                >
                  <DoublePointsIcon />
                </div>
                <div>{el.title}</div>
                <div>{el.start}</div>
                <div>{el.dead}</div>
                <div>{el.tasks}</div>
                <div>{el.pending}</div>
                <div>{el.completed}</div>
                <div>
                  <span className={theme === "dark" ? "gray" : "gray-l"}>
                    <EditIcon />
                  </span>
                  <span className={theme === "dark" ? "gray" : "gray-l"}>
                    <DeleteIcon />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {create ? (
        <Overlay close={toggleCreateModal}>
          <div
            className={clsx(
              "create-milestone",
              theme === "dark" ? "c-m-d" : "c-m-l"
            )}
          >
            <div className="create-milestone_first">
              <p className={theme === "dark" ? "page-title" : "page-title-l"}>
                Add milestones
              </p>
              <span
                className={theme === "dark" ? "gray" : "gray-l"}
                onClick={toggleCreateModal}
              >
                <CloseIcon />
              </span>
            </div>
            <div className="create-milestone_second">
              <span
                className={clsx(
                  "bl-title",
                  theme === "dark" ? "gray" : "gray-l"
                )}
              >
                Milestone name
              </span>
              <BorderedInput defaultValue="Placeholder_input" />
            </div>
            <div className="create-milestone_third">
              <div>
                <span
                  className={clsx(
                    "bl-title",
                    theme === "dark" ? "gray" : "gray-l"
                  )}
                >
                  Start date
                </span>
                <span
                  className={clsx(
                    "bl-title",
                    theme === "dark" ? "gray" : "gray-l"
                  )}
                >
                  Due date
                </span>
              </div>
              <div>
                <BorderedInput defaultValue="17.03.2023" />
                <BorderedInput defaultValue="25.11.23" />
              </div>
            </div>
            <div className="create-milestone_fours">
              <span
                className={clsx(
                  "bl-title",
                  theme === "dark" ? "gray" : "gray-l"
                )}
              >
                Description
              </span>
              <textarea className={theme === "dark" ? "desc-t" : "desc-t-l"} defaultValue={"Description text"}></textarea>
            </div>
            <div className="create-milestone_fives">
              <button
                className={theme === "dark" ? "cencel-btn" : "cencel-btn-l"}
              >
                Cencel
              </button>
              <button
                className={theme === "dark" ? "success-btn" : "success-btn-l"}
              >
                Save
              </button>
            </div>
          </div>
        </Overlay>
      ) : null}
    </>
  );
};

export default Milestones;
