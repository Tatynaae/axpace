import React, { useState } from "react";
import Overlay from "../../../../components/Overlay";
import EditIcon from "../../../../assets/icons/EditIcon";
import PlusIcon from "../../../../assets/icons/PlusIcon";
import CloseIcon from "../../../../assets/icons/CloseIcon";
import DeleteIcon from "../../../../assets/icons/DeleteIcon";
import BorderedInput from "../../../../components/UI/BorderedInput";
import DoublePointsIcon from "../../../../assets/icons/DoublePointsIcon";
import "./Milestones.scss";

const Milestones = () => {
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
          <button onClick={toggleCreateModal}>
            <PlusIcon />
            Create milestones
          </button>
        </div>
        <div className="milestones_list">
          <div className="milestones_list-head">
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
              <div className="milestones_list-element" key={idx}>
                <div className="doublepoints">
                  <DoublePointsIcon />
                </div>
                <div>{el.title}</div>
                <div>{el.start}</div>
                <div>{el.dead}</div>
                <div>{el.tasks}</div>
                <div>{el.pending}</div>
                <div>{el.completed}</div>
                <div>
                  <span className="gray">
                    <EditIcon />
                  </span>
                  <span className="gray">
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
          <div className="create-milestone">
            <div className="create-milestone_first">
              <p className="page-title">Add milestones</p>
              <span className="gray" onClick={toggleCreateModal}>
                <CloseIcon />
              </span>
            </div>
            <div className="create-milestone_second">
              <span className="bl-title">Milestone name</span>
              <BorderedInput defaultValue="Placeholder_input" />
            </div>
            <div className="create-milestone_third">
              <div>
                <span className="bl-title">Start date</span>
                <span className="bl-title">Due date</span>
              </div>
              <div>
                <BorderedInput />
                <BorderedInput />
              </div>
            </div>
            <div className="create-milestone_fours">
              <span className="bl-title">Description</span>
              <textarea defaultValue={"Description text"}></textarea>
            </div>
            <div className="create-milestone_fives">
              <button className="cencel-btn">Cencel</button>
              <button className="success-btn">Save</button>
            </div>
          </div>
        </Overlay>
      ) : null}
    </>
  );
};

export default Milestones;
