import React, { useState } from "react";
import { useThemeContext } from "../../../../context/ThemeContext";
import Tabs from "../../../../components/UI/Tabs";
import "./Activities.scss";

const activities = [
  {
    title: "Weekly",
    value: "Weekly",
    activity: [
      { day: "Mon", time: "7:00" },
      { day: "Tue", time: "9:00" },
      { day: "Wen", time: "4:30" },
      { day: "Thu", time: "5:45" },
      { day: "Fri", time: "9:15" },
      { day: "Sat", time: "0" },
      { day: "Sun", time: "0" },
      { day: "Total", time: "30:10" },
    ],
  },
  {
    title: "Monthly",
    value: "Monthly",
  },
];

const Activities = () => {
  const { theme } = useThemeContext();
  const [isActive, setIsActive] = useState(activities[0].value);

  const handleActive = (value) => {
    setIsActive(value);
  };

  const parseTimeToHours = (time) => {
    const [hours, minutes] = time.split(":");
    return parseInt(hours, 10) + parseInt(minutes, 10) / 60;
  };
  return (
    <>
      <Tabs
        variant="underline"
        list={activities}
        onSelect={handleActive}
        isActive={isActive}
      />
      <div className="all-activities">
        {activities[0].activity.map((el, idx) => {
          const timeInHours = parseTimeToHours(el.time);
          const percentageHeight = (timeInHours / 30.1667) * 100;

          const style =
            el.time === "0"
              ? {
                  height: "190px",
                  background: theme === "dark" ? "#2C3236" : "#D4D8DB",
                }
              : {
                  height: `${percentageHeight}%`,
                  background: theme === "dark" ? "#2A57C8" : "#4683F7",
                };
          return (
            <div className="activity" key={idx}>
              <div className="activity-time">
                <span
                  className={
                    theme === "dark"
                      ? "activity-time_dark"
                      : "activity-time_light"
                  }
                >
                  {el.time}
                </span>
                <div className="activity-sq" style={style}></div>
              </div>
              <div
                className={"activity-day"}
                style={{
                  borderTop:
                    theme === "dark"
                      ? "1px solid #2c3236"
                      : "1px solid #D4D8DB",
                }}
              >
                <span
                  className={
                    theme === "dark"
                      ? "activity-day_dark"
                      : "activity-day_light"
                  }
                >
                  {el.day}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Activities;
