import React, { useState } from "react";
import { useThemeContext } from "../../context/ThemeContext";
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
import clsx from "clsx";

const TimeSheet = () => {
  const { theme } = useThemeContext();
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
          <div className={theme === "dark" ? "page-title" : "page-title-l"}>
            Timesheet
          </div>
          <div className="time-sheet_top">
            {times.map((element) => (
              <TimeCards element={element} />
            ))}
          </div>
          <div className="time-sheet_month">
            <span className="left-a">
              <SlideMonthArrowIcon />
            </span>
            <span className={theme === "dark" ? "month-t" : "month-t-l"}>
              October
            </span>
            <span className="right-a">
              <SlideMonthArrowIcon />
            </span>
          </div>
          <div
            className={
              theme === "dark" ? "time-sheet_week" : "time-sheet_week-l"
            }
          >
            <div className="row">
              <div
                className={clsx(
                  "row_col",
                  theme === "dark" ? "gray" : "gray-l"
                )}
              >
                Week
              </div>
              <div
                className={clsx(
                  "row_col",
                  theme === "dark" ? "gray" : "gray-l"
                )}
              >
                Date
              </div>
              <div
                className={clsx(
                  "row_col",
                  theme === "dark" ? "gray" : "gray-l"
                )}
              >
                Start
              </div>
              <div
                className={clsx(
                  "row_col",
                  theme === "dark" ? "gray" : "gray-l"
                )}
              >
                Finish
              </div>
              <div
                className={clsx(
                  "row_col",
                  theme === "dark" ? "gray" : "gray-l"
                )}
              >
                Hours
              </div>
              <div
                className={clsx(
                  "row_col",
                  theme === "dark" ? "gray" : "gray-l"
                )}
              >
                Edit
              </div>
            </div>
            {weeks.map((week) => (
              <div className="row">
                <div
                  className={clsx(
                    "row_col",
                    theme === "dark" ? "white" : "dark-white"
                  )}
                >
                  {week.day}
                </div>
                <div
                  className={clsx(
                    "row_col",
                    theme === "dark" ? "white" : "dark-white"
                  )}
                >
                  {week.date}
                </div>
                <div
                  className={clsx(
                    "row_col",
                    theme === "dark" ? "white" : "dark-white"
                  )}
                >
                  {week.start}
                </div>
                <div
                  className={clsx(
                    "row_col",
                    theme === "dark" ? "white" : "dark-white"
                  )}
                >
                  {week.finish}
                </div>
                <div
                  className={clsx(
                    "row_col",
                    theme === "dark" ? "white" : "dark-white"
                  )}
                >
                  {week.hours}
                </div>
                <div
                  className={clsx(
                    "row_col",
                    theme === "dark" ? "gray" : "gray-l"
                  )}
                >
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
          <div
            className={theme === "dark" ? "edit-timesheet" : "edit-timesheet-l"}
          >
            <div className="edit-timesheet_first">
              <span className={theme === "dark" ? "white" : "white-l"}>
                Edit timesheet
              </span>
              <span
                className={clsx("close", theme === "dark" ? "gray" : "gray-l")}
                onClick={toggleOverlay}
              >
                <CloseIcon />
              </span>
            </div>
            <div
              className={
                theme === "dark"
                  ? "edit-timesheet_second"
                  : "edit-timesheet_second-l"
              }
            >
              <span>Date</span>
              <BorderedInput defaultValue="17.03.24" />
            </div>
            <div
              className={
                theme === "dark"
                  ? "edit-timesheet_third"
                  : "edit-timesheet_third-l"
              }
            >
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
              <button
                className={theme === "dark" ? "cencel-btn" : "cencel-btn-l"}
                onClick={toggleOverlay}
              >
                Cencel
              </button>
              <button
                className={theme === "dark" ? "success-btn" : "success-btn-l"}
                onClick={toggleOverlay}
              >
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
