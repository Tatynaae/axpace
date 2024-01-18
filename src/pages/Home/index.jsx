import React from "react";
import { useMyProjectsContext } from "../../context/MyProjectsContext";
import Frame from "../../components/UI/Frame";
import MyTasks from "./components/MyTasks";
import Activities from "./components/Activities";
import MyProjects from "./components/MyProjects";
import "./Home.scss";

const Home = () => {
  const { projects } = useMyProjectsContext();

  return (
    <section className="main">
      <div className="main_top">
        <Frame title={"My tasks"} children={<MyTasks />} />
        <Frame
          title={"Projects"}
          children={<MyProjects allMyProjects={projects} />}
        />
      </div>
      <div className="main_bottom">
        <Frame title={"Activities"} children={<Activities />} />
      </div>
    </section>
  );
};

export default Home;
