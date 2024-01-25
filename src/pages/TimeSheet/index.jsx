import React, { useState } from "react";
import TimeCards from "./components/TimeCards";
import Overlay from "../../components/Overlay";
import RedImg from "../../assets/images/red.png";
import EditIcon from "../../assets/icons/EditIcon";
import GreenImg from "../../assets/images/green.png";
import CloseIcon from "../../assets/icons/CloseIcon";
import GreenArrow from "../../assets/icons/GreenArrow";
import BorderedInput from "../../components/UI/BorderedInput";
import SlideMonthArrowIcon from "../../assets/icons/SlideMonthArrowIcon";
import "./TimeSheet.scss";

const TimeSheet = () => {
  const [overlay, setOverlay] = useState(false);
  const times = [
    {
      title: "Worked  today",
      time: "8:00",
      compare: "50% more than last day",
      image: GreenImg,
      icon: <GreenArrow />,
      lot: true,
    },
    {
      title: "Worked  this week",
      time: "35:50",
      compare: "10% more than last week",
      image: RedImg,
      icon: <GreenArrow />,
      lot: false,
    },
    {
      title: "Worked  this month",
      time: "120:40",
      compare: "20% more than last month",
      image: GreenImg,
      icon: <GreenArrow />,
      lot: true,
    },
  ];

  const weeks = [
    {
      day: "Monday",
      date: "01.07.2023",
      start: "10:05",
      finish: "18:30",
      hours: "9h 35m",
    },
    {
      day: "Tuesday",
      date: "02.07.2023",
      start: "10:00",
      finish: "18:00",
      hours: "10h",
    },
    {
      day: "Wednesday",
      date: "03.07.2023",
      start: "09:05",
      finish: "18:10",
      hours: "9h 40m",
    },
    {
      day: "Thursday",
      date: "04.07.2023",
      start: "10:20",
      finish: "18:30",
      hours: "8h 45m",
    },
    {
      day: "Friday",
      date: "05.07.2023",
      start: "11:00",
      finish: "17:55",
      hours: "10h 55m",
    },
    {
      day: "Saturday",
      date: "05.07.2023",
      start: "10:08",
      finish: "18:00",
      hours: "8h",
    },
    {
      day: "Sunday",
      date: "07.07.2023",
      start: "09:45",
      finish: "19:00",
      hours: "9h 10m",
    },
  ];

  const toggleOverlay = () => {
    setOverlay(!overlay);
  };
  return (
    <>
      <div className="time-sheet">
        <div className="time-sheet_container">
          <div className="page-title">Timesheet</div>
          <div className="time-sheet_top">
            {times.map((element) => (
              <TimeCards element={element} />
            ))}
          </div>
          <div className="time-sheet_month">
            <span className="left-a">
              <SlideMonthArrowIcon />
            </span>
            <span className="month-t">October</span>
            <span className="right-a">
              <SlideMonthArrowIcon />
            </span>
          </div>
          <div className="time-sheet_week">
            <div className="row">
              <div className="row_col gray">Week</div>
              <div className="row_col gray">Date</div>
              <div className="row_col gray">Start</div>
              <div className="row_col gray">Finish</div>
              <div className="row_col gray">Hours</div>
              <div className="row_col gray">Edit</div>
            </div>
            {weeks.map((week) => (
              <div className="row">
                <div className="row_col white">{week.day}</div>
                <div className="row_col white">{week.date}</div>
                <div className="row_col white">{week.start}</div>
                <div className="row_col white">{week.finish}</div>
                <div className="row_col white">{week.hours}</div>
                <div className="row_col gray">
                  <div className="edit" onClick={toggleOverlay}>
                    <EditIcon />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {overlay ? (
        <Overlay close={toggleOverlay}>
          <div className="edit-timesheet">
            <div className="edit-timesheet_first">
              <span className="white">Edit timesheet</span>
              <span className="gray close" onClick={toggleOverlay}>
                <CloseIcon />
              </span>
            </div>
            <div className="edit-timesheet_second">
              <span>Date</span>
              <BorderedInput defaultValue="17.03.24" />
            </div>
            <div className="edit-timesheet_third">
              <div>
                <span>Start time</span>
                <BorderedInput defaultValue="9:50" />
              </div>
              <div>
                <span>Finish time</span>
                <BorderedInput defaultValue="18:30" />
              </div>
            </div>
            <div className="edit-timesheet_fours">
              <button className="cencel-btn" onClick={toggleOverlay}>
                Cencel
              </button>
              <button className="success-btn" onClick={toggleOverlay}>
                Save
              </button>
            </div>
          </div>
        </Overlay>
      ) : null}
    </>
  );
};

export default TimeSheet;
