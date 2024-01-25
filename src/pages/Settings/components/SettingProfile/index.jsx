import React from "react";
import BorderedInput from "../../../../components/UI/BorderedInput";
import ProfileIcon from "../../../../assets/icons/Profilecon";
import "./SettingProfile.scss";

const SettingProfile = ({ edit, toggleEdit }) => {
  const profile = [
    { key: "Full name", value: "User name" },
    { key: "E-mail", value: "Example@gmail.com" },
    { key: "Job title", value: "Backend developer" },
  ];

  return (
    <div className="s-p">
      <div className="s-p_content">
        <div className="gray s-p_content_left">
          <ProfileIcon />
        </div>
        {edit ? (
          <div className="s-p_content_remove-photo">
            <label htmlFor="remove-photo" className="gray">
              Remove photo
            </label>
            <input type="file" id="remove-photo" hidden />
          </div>
        ) : null}
      </div>
      {profile.map((p, idx) => (
        <div className="s-p_content">
          <div className="s-p_content_left" key={idx}>
            {p.key}
          </div>
          <div className="s-p_content_right" key={idx}>
            {edit ? <BorderedInput defaultValue={p.value} /> : p.value}
          </div>
        </div>
      ))}
      {edit ? (
        <div className="s-p_btns">
          <button className="cencel-btn" onClick={toggleEdit}>
            Cancel
          </button>
          <button className="success-btn" onClick={toggleEdit}>
            Save
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default SettingProfile;
