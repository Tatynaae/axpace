import React, { useEffect, useRef, useState } from "react";
import { useThemeContext } from "../../../context/ThemeContext";
import clsx from "clsx";
import Overlay from "../../Overlay";
import Notifications from "../../Notifications";
import BellIcon from "../../../assets/icons/BellIcon";
import LinesIcon from "../../../assets/icons/LinesIcon";
import StartIcon from "../../../assets/icons/StartIcon";
import ResetIcon from "../../../assets/icons/ResetIcon";
import PauseIcon from "../../../assets/icons/PauseIcon";
import ProfileImage from "../../../assets/images/profile.png";
import ThemeDarkIcon from "../../../assets/icons/ThemeDarkIcon";
import "./Header.scss";

const Header = () => {
  const { changeTheme, theme } = useThemeContext();
  const [overlay, setOverlay] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [reset, setReset] = useState(false);
  const [timer, setTimer] = useState("00:00:00");
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const intervalRef = useRef(null);

  const toggleOverlay = () => {
    setOverlay(!overlay);
  };
  const startTimer = () => {
    setIsRunning(true);
    setReset(true);
  };

  const pauseTimer = () => {
    setIsRunning((prevIsRunning) => {
      if (prevIsRunning) {
        clearInterval(intervalRef.current);
      }
      return !prevIsRunning;
    });
  };

  const resetTimer = () => {
    setTimer("00:00:00");
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setIsRunning(false);
    setReset(false);
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          const newSeconds = (prevSeconds + 1) % 60;
          setMinutes((prevMinutes) => {
            const newMinutes =
              (prevSeconds + 1) % 60 === 0 ? prevMinutes + 1 : prevMinutes;
            setHours((prevHours) => {
              const newHours = newMinutes === 60 ? prevHours + 1 : prevHours;
              setTimer(
                `${newHours < 10 ? `0${newHours}` : newHours}:${
                  newMinutes < 10 ? `0${newMinutes}` : newMinutes
                }:${newSeconds < 10 ? `0${newSeconds}` : newSeconds}`
              );
              return newHours;
            });
            return newMinutes;
          });
          return newSeconds;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  return (
    <>
      <header
        className={clsx(
          "header",
          theme === "dark" ? "dark-header" : "light-header"
        )}
      >
        <div className={"header_left"}>
          <LinesIcon />
          <span
            className={clsx(
              "timer",
              theme === "dark" ? "dark-timer" : "light-timer"
            )}
          >
            {timer}
          </span>
          {!isRunning ? (
            <div className="start" onClick={startTimer}>
              <StartIcon />
            </div>
          ) : (
            <div className="pause" onClick={pauseTimer}>
              <PauseIcon />
            </div>
          )}
          {reset ? (
            <div className="reset" onClick={resetTimer}>
              <ResetIcon />
            </div>
          ) : null}
        </div>
        <div className={"header_right"}>
          <div
            className={clsx("theme", theme === "dark" ? "gray" : "gray-l")}
            onClick={changeTheme}
          >
            <ThemeDarkIcon />
          </div>
          <div
            className={clsx(
              "notification",
              theme === "dark" ? "gray" : "gray-l"
            )}
            onClick={toggleOverlay}
          >
            <BellIcon />
          </div>
          <div className="profile">
            <div className="profile_image">
              <img src={ProfileImage} alt="" />
            </div>
            <div className="profile_info">
              <h4
                className={clsx(
                  "profile_info__name",
                  theme === "light"
                    ? "profile_info__dark_name"
                    : "profile_info__light_name"
                )}
              >
                Sultanbekova Janylai
              </h4>
              <p className="profile_info__profession">UI/UX designer</p>
            </div>
          </div>
        </div>
      </header>
      {overlay ? (
        <Overlay close={toggleOverlay}>
          <Notifications close={toggleOverlay} />
        </Overlay>
      ) : null}
    </>
  );
};

export default Header;
