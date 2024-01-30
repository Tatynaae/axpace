import React from "react";
import { useThemeContext } from "../../../../context/ThemeContext";
import BorderedInput from "../../../../components/UI/BorderedInput";
import ProfileIcon from "../../../../assets/icons/Profilecon";
import "./SettingProfile.scss";
import clsx from "clsx";

const SettingProfile = ({ edit, toggleEdit }) => {
  const { theme } = useThemeContext();
  const profile = [
    { key: "Full name", value: "User name" },
    { key: "E-mail", value: "Example@gmail.com" },
    { key: "Job title", value: "Backend developer" },
  ];

  return (
    <div className="s-p">
      <div className="s-p_content">
        <div
          className={clsx(
            theme === "dark" ? "s-p_content_left" : "s-p_content_left-l",
            theme === "dark" ? "gray" : "gray-l"
          )}
        >
          <ProfileIcon />
        </div>
        {edit ? (
          <div className="s-p_content_remove-photo">
            <label
              htmlFor="remove-photo"
              className={theme === "dark" ? "gray" : "gray-l"}
            >
              Remove photo
            </label>
            <input type="file" id="remove-photo" hidden />
          </div>
        ) : null}
      </div>
      {profile.map((p, idx) => (
        <div className="s-p_content">
          <div
            className={
              theme === "dark" ? "s-p_content_left" : "s-p_content_left-l"
            }
            key={idx}
          >
            {p.key}
          </div>
          <div
            className={
              theme === "dark" ? "s-p_content_right" : "s-p_content_right-l"
            }
            key={idx}
          >
            {edit ? <BorderedInput defaultValue={p.value} /> : p.value}
          </div>
        </div>
      ))}
      {edit ? (
        <div className="s-p_btns">
          <button
            className={theme === "dark" ? "cencel-btn" : "cencel-btn-l"}
            onClick={toggleEdit}
          >
            Cancel
          </button>
          <button
            className={theme === "dark" ? "success-btn" : "success-btn-l"}
            onClick={toggleEdit}
          >
            Save
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default SettingProfile;
