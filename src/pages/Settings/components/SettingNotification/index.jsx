import React, { useState } from "react";
import BorderedInput from "../../../../components/UI/BorderedInput";
import { useThemeContext } from "../../../../context/ThemeContext";
import "./SettingNotification.scss";

const SettingNotification = () => {
  const { theme } = useThemeContext();
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const nots = ["Task updates", "Mentions only", "Nothing"];
  const nots2 = ["Status updates", "Tasks added"];

  const [browserNot, setBrowserNot] = useState(null);
  const [projectNot, setProjectNot] = useState([]);

  const handleRadioChange = (value) => {
    setBrowserNot(value);
  };

  const handleCheckboxChange = (value) => {
    const updatedProjects = projectNot.includes(value)
      ? projectNot.filter((project) => project !== value)
      : [...projectNot, value];

    setProjectNot(updatedProjects);
  };
  return (
    <div className="s-n">
      <div className="s-n_first">
        <span className={theme === "dark" ? "page-title" : "page-title-l"}>
          Do not notify me from
        </span>
        <span
          className={theme === "dark" ? "s-n_first_time" : "s-n_first_time-l"}
        >
          <BorderedInput defaultValue={"17:00 pm"} />
        </span>
        <span className={theme === "dark" ? "page-title" : "page-title-l"}>
          -
        </span>
        <span
          className={theme === "dark" ? "s-n_first_time" : "s-n_first_time-l"}
        >
          <BorderedInput defaultValue={"08:00 am"} />
        </span>
      </div>
      <div className="s-n_second">
        <span className={theme === "dark" ? "page-title" : "page-title-l"}>
          Do not disturb me on my days off:
        </span>
        <div className="s-n_second_days">
          {days.map((day, idx) => (
            <div
              className={
                theme === "dark" ? "s-n_second_time" : "s-n_second_time-l"
              }
              key={idx}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
      <div className="s-n_third">
        <span className={theme === "dark" ? "page-title" : "page-title-l"}>
          Send me browser notifications for…
        </span>
        <div className={theme === "dark" ? "s-n_elements" : "s-n_elements-l"}>
          {nots.map((not, idx) => (
            <div key={idx}>
              <input
                type="radio"
                checked={browserNot === not}
                onChange={() => handleRadioChange(not)}
              />
              <span>{not}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="s-n_fours">
        <span className={theme === "dark" ? "page-title" : "page-title-l"}>
          Project notifications
        </span>
        <div className={theme === "dark" ? "s-n_elements" : "s-n_elements-l"}>
          {nots2.map((not2, idx) => (
            <div key={idx}>
              <input
                type="checkbox"
                checked={projectNot.includes(not2)}
                onChange={() => handleCheckboxChange(not2)}
              />
              <span>{not2}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingNotification;
