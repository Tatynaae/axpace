import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMyProjectsContext } from "../../context/MyProjectsContext";
import Task from "./components/Task";
import Tabs from "../../components/UI/Tabs";
import Overlay from "../../components/Overlay";
import ArrowDown from "../../assets/icons/ArrowDown";
import AddButton from "../../components/UI/AddButton";
import ModalList from "../../components/UI/ModalList";
import FilterIcon from "../../assets/icons/FilterIcon";
import StarredIcon from "../../assets/icons/StarredIcon";
import ProjectTitle from "../../components/UI/ProjectTitle";
import CreateProject from "../../components/UI/CreateProject";
import StarFilledIcon from "../../assets/icons/StarFilledIcon";
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
  const addInputRef = useRef(null);
  const { projects, setProjects, archiveProject, starProject, nonStarProject } =
    useMyProjectsContext();
  const [addInput, setAddInput] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [projectList, setProjectList] = useState(false);
  const [content, setContent] = useState(listOfTabs[1].value);
  const [newSectionTitle, setNewSectionTitle] = useState(null);

  const Index = parseInt(location.pathname.slice(-1), 10);
  const project = projects[Index - 1];

  const getTasks = (projectId, status) => {
    if (project.id === projectId) {
      return project.tasks.filter((el) => el.status === status);
    }

    return [];
  };

  const [sections, setSections] = useState([
    {
      id: 1,
      sectionTitle: "Todo",
      tasks: getTasks(project.id, "todo"),
    },
    {
      id: 2,
      sectionTitle: "Doing",
      tasks: getTasks(project.id, "doing"),
    },
    {
      id: 3,
      sectionTitle: "Completed",
      tasks: getTasks(project.id, "completed"),
    },
  ]);

  const handleBlurAddInput = () => {
    setAddInput(false);
  };

  const handleAddSection = (e) => {
    setNewSectionTitle(e.target.value);
  };

  const handleClickAddInput = (e) => {
    if (e.key === "Enter" && newSectionTitle && newSectionTitle.length > 0) {
      setSections([
        ...sections,
        {
          id: sections[sections.length - 1].id + 1,
          sectionTitle: newSectionTitle,
          tasks: [],
        },
      ]);
      setAddInput(false);
      setNewSectionTitle("");
    }
  };

  const handleDeleteSection = (sectionId) => {
    setSections((prevSectons) => prevSectons.filter((s) => s.id !== sectionId));
  };

  const handleRenameSectionTitle = (sectionId, newTitle) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? { ...section, sectionTitle: newTitle }
          : section
      )
    );
  };

  const toggleProjectList = () => {
    setProjectList(!projectList);
  };

  const handleAddTask = (taskTitle, curSection) => {
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      date: "Oct 4-7",
      assign: "JS",
      status: curSection.sectionTitle.toLowerCase(),
      priority: "",
      comments: [],
      subtasks: [],
      responsible: [],
    };

    setProjects((prevProjects) => {
      return prevProjects.map((proj) => {
        if (proj.id === project.id) {
          return {
            ...proj,
            tasks: [...proj.tasks, newTask],
          };
        }
        return proj;
      });
    });
  };

  const handleDeleteTask = (taskId) => {
    setProjects((prevProjects) => {
      return prevProjects.map((proj) => {
        if (proj.id === project.id) {
          return {
            ...proj,
            tasks: proj.tasks.filter((task) => task.id !== taskId),
          };
        }
        return proj;
      });
    });
  };

  const toggleOverlay = () => {
    setOverlay(!overlay);
  };

  useEffect(() => {
    if (addInputRef.current) {
      addInputRef.current.focus();
    }
  }, [addInput]);

  useEffect(() => {
    setSections((prevSections) =>
      prevSections.map((section) => ({
        ...section,
        tasks: getTasks(project.id, section.sectionTitle.toLowerCase()),
      }))
    );
  }, [projects, project.id]);

  const handleArchiveProject = () => {
    archiveProject(project.id);
    setProjectList(false);
  };
  const handleCreateProject = () => {
    toggleOverlay();
    toggleProjectList();
  };

  const handleToggleStarProject = () => {
    project.starred === false
      ? starProject(project.id)
      : nonStarProject(project.id);
  };

  const someSettings = [
    { title: "Project details", function: null },
    { title: "Dublicate", function: null },
    { title: "Copy project link", function: null },
    { title: "Archive", function: handleArchiveProject },
    { title: "Create project", function: handleCreateProject },
    { title: "Leave the project", function: null },
  ];

  return (
    <>
      <section className="projectDetail_container">
        <div className="first_section">
          <div className="first_section__left">
            <ProjectTitle title={project.title} onClick={toggleProjectList} />
            <div className="icons">
              <ArrowDown />
              <div onClick={handleToggleStarProject}>
                {!project.starred ? <StarredIcon /> : <StarFilledIcon />}
              </div>
            </div>
            {projectList && (
              <div className="list-of-projects">
                <ModalList list={someSettings} />
              </div>
            )}
          </div>
          <div className="first_section__right">
            <div className="users">
              {project.members.slice(0, 3).map((member, index) => (
                <div key={index} className={`users_user user${index + 1}`}>
                  <img src={member.image || null} alt={`User ${index + 1}`} />
                </div>
              ))}
              <div className="users_user user4">
                +{project.members.length - 3}
              </div>
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
          {sections.map((section) => (
            <Task
              key={section.id}
              section={section}
              project={project}
              sections={sections}
              onAddTask={handleAddTask}
              onDeleteTask={handleDeleteTask}
              onDeleteSection={handleDeleteSection}
              onRenameSection={handleRenameSectionTitle}
            />
          ))}
          {addInput ? (
            <input
              type="text"
              ref={addInputRef}
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

      {overlay ? (
        <Overlay>
          <CreateProject close={toggleOverlay} />
        </Overlay>
      ) : null}
    </>
  );
};

export default ProjectDetail;
