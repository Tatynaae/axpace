import React, { useState } from "react";
import clsx from "clsx";
import Overlay from "../../Overlay";
import BellIcon from "../../../assets/icons/BellIcon";
import LinesIcon from "../../../assets/icons/LinesIcon";
import PauseIcon from "../../../assets/icons/PauseIcon";
import ThemeDarkIcon from "../../../assets/icons/ThemeDarkIcon";
import { useThemeContext } from "../../../context/ThemeContext";
import ProfileImage from "../../../assets/images/profile.png";
import "./Header.scss";

const Header = () => {
  const { changeTheme, theme } = useThemeContext();
  const [overlay, setOverlay] = useState(false);

  const toggleOverlay = () => {
    setOverlay(!overlay);
  };
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
            7 : 45
          </span>
          <div className="pause">
            <PauseIcon />
          </div>
        </div>
        <div className={"header_right"}>
          <div className="theme" onClick={changeTheme}>
            <ThemeDarkIcon />
          </div>
          <div className="notification" onClick={toggleOverlay}>
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
      {overlay && <Overlay close={toggleOverlay}/>}
    </>
  );
};

export default Header;
