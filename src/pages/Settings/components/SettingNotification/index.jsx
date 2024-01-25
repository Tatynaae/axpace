import React, { useState } from "react";
import BorderedInput from "../../../../components/UI/BorderedInput";
import "./SettingNotification.scss";

const SettingNotification = () => {
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
        <span>Do not notify me from</span>
        <span className="s-n_first_time">
          <BorderedInput defaultValue={"17:00 pm"} />
        </span>
        <span>-</span>
        <span className="s-n_first_time">
          <BorderedInput defaultValue={"08:00 am"} />
        </span>
      </div>
      <div className="s-n_second">
        <span>Do not disturb me on my days off:</span>
        <div className="s-n_second_days">
          {days.map((day, idx) => (
            <div className="s-n_second_time" key={idx}>
              {day}
            </div>
          ))}
        </div>
      </div>
      <div className="s-n_third">
        <span>Send me browser notifications for…</span>
        <div className="s-n_elements">
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
        <span>Project notifications</span>
        <div className="s-n_elements">
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
