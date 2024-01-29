import React from "react";
import CheckIcon from "../../assets/icons/CheckIcon";
import ForwardIcon from "../../assets/icons/ForwardIcon";
import "./Notifications.scss";

const Notifications = ({ close }) => {
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
      text: "Moved the task from the “ToDo”to the “In prorgess” ",
      open: true,
    },
    {
      name: "JS",
      time: "2 days ago",
      text: "Moved the task from the “ToDo”to the “In prorgess” ",
      open: false,
    },
  ];

  return (
    <div className="nots">
      <div className="nots_container" onClick={(event) => closeNot(event)}>
        <div className="nots_top">
          <span>Notifications</span>
          <span className="gray" onClick={close}>
            <ForwardIcon />
          </span>
        </div>
        <div className="nots_content">
          <p>
            <span className="gray">Latest</span>
            <span>Mark all as read</span>
          </p>

          <div className="nots_content_all">
            {nots.map((el, idx) => (
              <div className="nots_content_not" key={idx}>
                <div className="nots_content_not_top">
                  <div>
                    <span className="username">{el.name}</span>
                    <span className="circle"></span>
                    <span>{el.time}</span>
                  </div>
                  {!el.open ? (
                    <div className="gray">
                      <CheckIcon />
                    </div>
                  ) : null}
                </div>
                <div className="nots_content_not_bot">{el.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
