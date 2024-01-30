import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../../context/ThemeContext";
import clsx from "clsx";
import LogoIcon from "../../../assets/icons/LogoIcon";
import HomeIcon from "../../../assets/icons/HomeIcon";
import StarredIcon from "../../../assets/icons/StarredIcon";
import ArchivedIcon from "../../../assets/icons/ArchivedIcon";
import SettingsIcon from "../../../assets/icons/SettingsIcon";
import ProjectsIcon from "../../../assets/icons/ProjectsIcon";
import LogsheetsIcon from "../../../assets/icons/LogsheetsIcon";
import TimesheetsIcon from "../../../assets/icons/TimesheetsIcon";
import "./Aside.scss";

const Aside = () => {
  const { theme } = useThemeContext();
  const [selected, setSelected] = useState("/");
  const navigate = useNavigate();

  const list = [
    {
      title: "Home",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      title: "Projects",
      icon: <ProjectsIcon />,
      path: "/projects",
    },
    {
      title: "Starred",
      icon: <StarredIcon />,
      path: "/starred",
    },
    {
      title: "Archived",
      icon: <ArchivedIcon />,
      path: "/archived",
    },
    {
      title: "Timesheets",
      icon: <TimesheetsIcon />,
      path: "/timesheets",
    },
    {
      title: "Log sheets",
      icon: <LogsheetsIcon />,
      path: "/log-sheets",
    },
    {
      title: "Setting",
      icon: <SettingsIcon />,
      path: "/setting",
    },
  ];

  const selectNav = (item) => {
    setSelected(item);
    navigate(item);
    window.scroll(0, 0);
  };

  return (
    <aside
      className={clsx(
        "aside_container",
        theme === "dark" ? "d-aside_container" : "l-aside_container"
      )}
    >
      <div
        className="aside_logo"
        onClick={() => navigate("/")}
        style={{
          color: theme === "dark" ? "#FAFAFA" : "#1E1F21",
        }}
      >
        <LogoIcon />
      </div>

      <nav className="nav">
        <ul className="nav_list">
          {list.map((item) => (
            <li
              key={item.path}
              className={clsx(
                selected === item.path &&
                  (theme === "dark" ? "dark-selectedLi" : "light-selectedLi")
              )}
              onClick={() => selectNav(item.path)}
            >
              <span
                className={clsx(
                  selected === item.path &&
                    (theme === "light" ? "dark-selected" : "light-selected"),
                  theme === "dark" ? "gray" : "gray-l"
                )}
              >
                {item.icon}
              </span>
              <span
                className={clsx(
                  selected === item.path &&
                    (theme === "light" ? "dark-selected" : "light-selected"),
                  theme === "dark" ? "gray" : "gray-l"
                )}
              >
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
