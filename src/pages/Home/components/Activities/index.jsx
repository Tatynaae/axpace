import React, { useState } from "react";
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
    ],
    total: "30:10",
  },
  {
    title: "Monthly",
    value: "Monthly",
  },
];

const Activities = () => {
  const [isActive, setIsActive] = useState(activities[0].value);

  const handleActive = (value) => {
    setIsActive(value);
  };

  function timeToMinutes(time) {
    if (time === "0") {
      return 0;
    }

    const [hours, minutes] = time.split(":");
    return parseInt(hours) * 60 + parseInt(minutes);
  }

  const calculatePercentage = (time) => {
    const totalMinutes = activities[0].activity.reduce(
      (total, activity) => total + timeToMinutes(activity.time),
      0
    );
    const minutes = timeToMinutes(time);
    return (minutes / totalMinutes) * 100;
  };

  const calculateTotalHeight = () => {
    const totalHeight = 210;
    return { height: `${totalHeight}px` };
  };

  const renderWeeklyActivities = () => {
    return activities[0].activity.map((activity, index) => (
      <div className="activity" key={index} style={{ height: "100%" }}>
        <span>{activity.time} h</span>
        <div
          className="activity_number"
          style={{ height: `${calculatePercentage(activity.time) * 3}%` }}
        ></div>
      </div>
    ));
  };

  const renderDays = () => {
    return activities[0].activity.map((activity, index) => (
      <div className="days" key={index}>
        <span>{activity.day}</span>
      </div>
    ));
  };

  return (
    <>
      <Tabs
        variant="underline"
        list={activities}
        onSelect={handleActive}
        isActive={isActive}
      />
      <div className="activities" style={calculateTotalHeight()}>
        <div className="allActivity">
          {isActive === "Weekly" && renderWeeklyActivities()}
          <div className="activity">
            <span>{activities[0].total}</span>
          </div>
        </div>

        <div className="activities_dates">
          {isActive === "Weekly" && renderDays()}
          <div className="total">
            <span>Total</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activities;
