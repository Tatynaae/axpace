import React, { useState } from "react";
import { useThemeContext } from "../../../../context/ThemeContext";
import Overlay from "../../../../components/Overlay";
import CloseIcon from "../../../../assets/icons/CloseIcon";
import MemberIcon from "../../../../assets/icons/MemberIcon";
import BorderedInput from "../../../../components/UI/BorderedInput";
import "./InviteMember.scss";

const InviteMember = ({ project }) => {
  const { theme } = useThemeContext();
  const [overlay, setOverlay] = useState(false);

  const toggleOverlay = () => {
    setOverlay(!overlay);
  };

  return (
    <>
      <button
        className="shareBtn"
        onClick={toggleOverlay}
        style={{
          backgroundColor: theme === "dark" ? "#2a57c8" : "#4683F7",
        }}
      >
        Share
      </button>
      {overlay ? (
        <Overlay close={toggleOverlay}>
          <div className="invite">
            <div className="invite_top">
              <span>Add members</span>
              <div onClick={toggleOverlay}>
                <CloseIcon />
              </div>
            </div>

            <div className="invite_inviting">
              <span>Invite via email</span>
              <div className="invite_inviting_email">
                <BorderedInput
                  type={"email"}
                  placeholder="Email"
                  className={"email-in"}
                />
                <button className="success-btn">Invite</button>
              </div>
            </div>

            <div className="invite_members">
              {project.members.map((member) => (
                <div className="exist-member">
                  <div className="exist-member_image">
                    {member.image ? (
                      <img src={member.image} alt="" />
                    ) : (
                      <MemberIcon />
                    )}
                  </div>
                  <div className="exist-member_name">{member.name}</div>
                </div>
              ))}
            </div>
          </div>
        </Overlay>
      ) : null}
    </>
  );
};

export default InviteMember;
