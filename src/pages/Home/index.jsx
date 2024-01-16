import React from "react";
import Frame from "../../components/UI/Frame";
import MyTasks from "./components/MyTasks";
import Activities from "./components/Activities";
import MyProjects from "./components/MyProjects";
import "./Home.scss";

const Home = () => {

  return (
    <section className="main">
      <div className="main_top">
        <Frame title={"My tasks"} children={<MyTasks />} />
        <Frame title={"Projects"} children={<MyProjects />}/>
      </div>
      <div className="main_bottom">
        <Frame title={'Activities'} children={<Activities />}/>
      </div>
    </section>
  );
};

export default Home;
