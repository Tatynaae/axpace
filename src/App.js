import React from "react";
import { Route, Routes } from "react-router-dom";
import { useThemeContext } from "./context/ThemeContext";
import clsx from "clsx";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import Archived from "./pages/Archived";
import Projects from "./pages/Projects";
import Settings from "./pages/Settings";
import LogSheets from "./pages/LogSheet";
import SignIn from "./components/SignIn";
import TimeSheets from "./pages/TimeSheet";
import ProjectDetail from "./pages/ProjectDetail";
import LogSheetDetail from "./pages/LogSheet/components/LogSheetDetail";
import "./index.scss";

const App = () => {
  const { theme } = useThemeContext();

  return (
    <div
      className={clsx(theme === "dark" ? "dark-container" : "light-container")}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/archived" element={<Archived />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/log-sheets" element={<LogSheets />} />
        <Route path="/timesheets" element={<TimeSheets />} />
        <Route path="/projects/*" element={<ProjectDetail />} />
        <Route path="/log-sheets/*" element={<LogSheetDetail />} />
      </Routes>
    </div>
  );
};

export default App;
