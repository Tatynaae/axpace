import React, { useEffect, useRef, useState } from "react";
import PlusIcon from "../../assets/icons/PlusIcon";
import ArrowDown from "../../assets/icons/ArrowDown";
import StarredIcon from "../../assets/icons/StarredIcon";
import FilterIcon from "../../assets/icons/FilterIcon";
import Task from "./components/Task";
import Tabs from "../../components/UI/Tabs";
import ProjectTitle from "../../components/UI/ProjectTitle";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
import "./ProjectDetail.scss";

const listOfTabs = [
  { id: 1, title: "Details", value: "Details" },
  { id: 2, title: "Tasks", value: "Tasks" },
  { id: 3, title: "Milestones", value: "Milestones" },
  { id: 4, title: "Files", value: "Files" },
  { id: 5, title: "Comments", value: "Comments" },
];

let allTasks = [
  {
    id: 1,
    title: "Section",
    tasks: [
      {
        id: 1,
        taskName: "Task name",
        date: "Oct 4-7",
        type: "JS",
        status: true,
        priority: false,
        comments: 1,
      },
    ],
  },
  {
    id: 2,
    title: "Section",
    tasks: [
      {
        id: 1,
        taskName: "Task name",
        date: "Oct 4-7",
        type: "JS",
        status: false,
        priority: false,
        comments: 2,
      },
      {
        id: 2,
        taskName: "Task name",
        date: "Oct 4-7",
        type: "JS",
        status: true,
        priority: true,
        comments: 0,
      },
    ],
  },
  {
    id: 3,
    title: "Section",
    tasks: [
      {
        id: 1,
        taskName: "Task name",
        date: "Oct 4-7",
        type: "JS",
        status: false,
        priority: false,
        comments: 3,
      },
      {
        id: 2,
        taskName: "Task name",
        date: "Oct 4-7",
        type: "JS",
        status: true,
        priority: true,
        comments: 1,
      },
      {
        id: 3,
        taskName: "Task name",
        date: "Oct 4-7",
        type: "JS",
        status: true,
        priority: true,
        comments: 2,
      },
    ],
  },
];

const ProjectDetail = () => {
  const [addSection, setAddSection] = useState(null);
  const [addInput, setAddInput] = useState(false);
  const [content, setContent] = useState(listOfTabs[1].value);
  const users = [
    {
      image: user1,
    },
    {
      image: user2,
    },
    {
      image: user3,
    },
  ];
  const addInputRef = useRef(null);

  const handleBlurAddInput = () => {
    setAddInput(false);
  };

  const handleAddSection = (e) => {
    setAddSection(e.target.value);
  };

  const handleClickAddInput = (e) => {
    if (e.key === "Enter" && addSection.length > 0) {
      allTasks.push({
        id: allTasks[allTasks.length - 1].id + 1,
        title: addSection,
        tasks: [],
      });
      setAddInput(false);
    }
  };

  useEffect(() => {
    if (addInputRef.current) {
      addInputRef.current.focus();
    }
  }, [addInput]);

  console.log(allTasks);

  return (
    <section className="projectDetail_container">
      <div className="first_section">
        <div className="first_section__left">
          <ProjectTitle title={"Project title"} />
          <div className="icons">
            <ArrowDown />
            <StarredIcon />
          </div>
        </div>
        <div className="first_section__right">
          <div className="users">
            <div className="users_user user1">
              <img src={users[0].image} alt="" />
            </div>
            <div className="users_user user2">
              <img src={users[1].image} alt="" />
            </div>
            <div className="users_user user3">
              <img src={users[2].image} alt="" />
            </div>
            <div className="users_user user4">+3</div>
          </div>
          <button className="shareBtn">Share</button>
        </div>
        <div className="line"></div>
      </div>
      <div className="second_section">
        <div className="second_section__left">
          <Tabs
            list={listOfTabs}
            variant={"underline"}
            isActive={content}
            onSelect={setContent}
          />
        </div>
        <div className="second_section__right">
          <FilterIcon />
          <span>Filter</span>
        </div>
        <div className="line"></div>
      </div>
      <div className="third_section">
        {allTasks.map((task) => (
          <Task task={task} allTasks={allTasks} />
        ))}
        {addInput ? (
          <input
            type="text"
            ref={addInputRef}
            required
            placeholder="Placeholder_input"
            className="third_section__addInput"
            onChange={(e) => handleAddSection(e)}
            onKeyDown={(e) => handleClickAddInput(e)}
            onBlur={handleBlurAddInput}
          />
        ) : (
          <div className="third_section__add" onClick={() => setAddInput(true)}>
            <PlusIcon />
            <span>Add Section</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;
