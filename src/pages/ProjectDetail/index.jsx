import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMyProjectsContext } from "../../context/MyProjectsContext";
import Task from "./components/Task";
import Tabs from "../../components/UI/Tabs";
import ArrowDown from "../../assets/icons/ArrowDown";
import AddButton from "../../components/UI/AddButton";
import ModalList from "../../components/UI/ModalList";
import FilterIcon from "../../assets/icons/FilterIcon";
import StarredIcon from "../../assets/icons/StarredIcon";
import ProjectTitle from "../../components/UI/ProjectTitle";

import "./ProjectDetail.scss";

const listOfTabs = [
  { id: 1, title: "Details", value: "Details" },
  { id: 2, title: "Tasks", value: "Tasks" },
  { id: 3, title: "Milestones", value: "Milestones" },
  { id: 4, title: "Files", value: "Files" },
  { id: 5, title: "Comments", value: "Comments" },
];

const ProjectDetail = () => {
  const location = useLocation();
  const { projects, setProjects } = useMyProjectsContext();
  const [addSection, setAddSection] = useState(null);
  const [addInput, setAddInput] = useState(false);
  const [content, setContent] = useState(listOfTabs[1].value);
  const [projectList, setProjectList] = useState(false);

  const Index = parseInt(location.pathname.slice(-1), 10);
  const project = projects[Index - 1];

  const [allTasks, setAllTasks] = useState([
    {
      id: 1,
      title: "Todo",
      tasks: project.tasks && project.tasks.todo ? project.tasks.todo : [],
    },
    {
      id: 2,
      title: "Doing",
      tasks: project.tasks && project.tasks.doing ? project.tasks.doing : [],
    },
    {
      id: 3,
      title: "Completed",
      tasks:
        project.tasks && project.tasks.completed ? project.tasks.completed : [],
    },
  ]);

  const addInputRef = useRef(null);

  const handleBlurAddInput = () => {
    setAddInput(false);
  };

  const handleAddSection = (e) => {
    setAddSection(e.target.value);
  };
  const handleClickAddInput = (e, projectId) => {
    if (e.key === "Enter" && addSection && addSection.length > 0) {
      setProjects((prevProjects) => {
        return prevProjects.map((project) => {
          if (project.id === projectId) {
            const updatedTasks = {
              ...project.tasks,
              [addSection]: [],
            };

            const updatedProject = {
              ...project,
              tasks: updatedTasks,
            };

            const updatedAllTasks = [
              ...allTasks,
              {
                id: allTasks.length + 1,
                title: addSection,
                tasks: updatedTasks[addSection] ? updatedTasks[addSection] : [],
              },
            ];

            setAllTasks(updatedAllTasks);
            return updatedProject;
          }
          return project;
        });
      });
      setAddInput(false);
      setAddSection("");
    }
  };

  const handleDeleteSection = (projectId, sectionTitle) => {
    setProjects((prevProjects) => {
      return prevProjects.map((project) => {
        if (project.id === projectId) {
          const updatedTasks = { ...project.tasks };
          delete updatedTasks[sectionTitle];

          const updatedProject = {
            ...project,
            tasks: updatedTasks,
          };

          const updatedAllTasks = allTasks.filter(
            (task) => task.title !== sectionTitle
          );

          setAllTasks(updatedAllTasks);
          return updatedProject;
        }
        return project;
      });
    });
  };

  const handleRenameSection = (projectId, oldSectionTitle, newSectionTitle) => {
    setProjects((prevProjects) => {
      return prevProjects.map((project) => {
        if (project.id === projectId) {
          const updatedTasks = { ...project.tasks };
          updatedTasks[newSectionTitle] = updatedTasks[oldSectionTitle];
          delete updatedTasks[oldSectionTitle];

          const updatedProject = {
            ...project,
            tasks: updatedTasks,
          };

          const updatedAllTasks = allTasks.map((task) =>
            task.title === oldSectionTitle
              ? { ...task, title: newSectionTitle }
              : task
          );

          setAllTasks(updatedAllTasks);
          return updatedProject;
        }
        return project;
      });
    });
  };

  const toggleProjectList = () => {
    setProjectList(!projectList);
  };

  useEffect(() => {
    if (addInputRef.current) {
      addInputRef.current.focus();
    }
  }, [addInput]);

  const listOfProjects = [
    "Project details",
    "Dublicate",
    "Copy project link",
    "Archive",
    "Create project",
    "Leave the project",
  ];
  return (
    <section className="projectDetail_container">
      <div className="first_section">
        <div className="first_section__left">
          <ProjectTitle title={project.title} onClick={toggleProjectList} />
          <div className="icons">
            <ArrowDown />
            <StarredIcon />
          </div>
          {projectList && (
            <div className="list-of-projects">
              <ModalList list={listOfProjects} />
            </div>
          )}
        </div>
        <div className="first_section__right">
          <div className="users">
            <div className="users_user user1">
              <img src={project.members[0].image} alt="" />
            </div>
            <div className="users_user user2">
              <img src={project.members[1].image} alt="" />
            </div>
            <div className="users_user user3">
              <img src={project.members[2].image} alt="" />
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
          <Task
            task={task}
            project={project}
            onDeleteSection={handleDeleteSection}
            onRenameSection={handleRenameSection}
          />
        ))}
        {addInput ? (
          <input
            type="text"
            ref={addInputRef}
            x
            required
            placeholder="Placeholder_input"
            className="third_section__addInput"
            onChange={(e) => handleAddSection(e)}
            onKeyDown={(e) => handleClickAddInput(e, Index)}
            onBlur={handleBlurAddInput}
          />
        ) : (
          <div className="third_section__addButton">
            <AddButton
              onClick={() => setAddInput(true)}
              title={"Add section"}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;
