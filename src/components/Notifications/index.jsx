import React from "react";
import { useThemeContext } from "../../context/ThemeContext";
import CheckIcon from "../../assets/icons/CheckIcon";
import ForwardIcon from "../../assets/icons/ForwardIcon";
import "./Notifications.scss";

const Notifications = ({ close }) => {
  const { theme } = useThemeContext();
  const closeNot = (e) => {
    e.stopPropagation();
  };
  const nots = [
    {
      name: "JS",
      time: "2 days ago",
      text: "Priority has been updated from",
      open: false,
    },
    {
      name: "JS",
      time: "2 days ago",
      text: "Moved the task from the “ToDo” to the “In prorgess” ",
      open: true,
    },
    {
      name: "JS",
      time: "2 days ago",
      text: "Moved the task from the “ToDo” to the “In prorgess” ",
      open: false,
    },
  ];

  return (
    <div className="nots">
      <div className={theme === 'dark' ? "nots_container" : "nots_container-l"} onClick={(event) => closeNot(event)}>
        <div className={theme === 'dark' ? "nots_top" : "nots_top-l"}>
          <span className={theme === "dark" ? "page-title" : "page-title-l"}>Notifications</span>
          <span className={theme === "dark" ? "gray" : "gray-l"} onClick={close}>
            <ForwardIcon />
          </span>
        </div>
        <div className="nots_content">
          <p>
            <span className={theme === "dark" ? "gray" : "gray-l"}>Latest</span>
            <span>Mark all as read</span>
          </p>

          <div className="nots_content_all">
            {nots.map((el, idx) => (
              <div className={theme === 'dark' ? "nots_content_not" : "nots_content_not-l"} key={idx}>
                <div className="nots_content_not_top">
                  <div>
                    <span className="username">{el.name}</span>
                    <span>
                      <b className={theme === 'dark' ? "name-d" : 'name-l'}>User name</b>
                    </span>
                    <span className="circle"></span>
                    <span>{el.time}</span>
                  </div>
                  {!el.open ? (
                    <div className={theme === "dark" ? "gray" : "gray-l"}>
                      <CheckIcon />
                    </div>
                  ) : null}
                </div>
                <div className={theme === 'dark' ? "nots_content_not_bot" : "nots_content_not_bot-l"}>{el.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
