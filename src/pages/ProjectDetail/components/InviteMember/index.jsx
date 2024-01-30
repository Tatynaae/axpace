import React, { useState } from "react";
import clsx from "clsx";
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
          <div
            className={clsx(
              "invite",
              theme === "dark" ? "invite-d" : "invite-l"
            )}
          >
            <div className="invite_top">
              <span
                className={theme === "dark" ? "page-title" : "page-title-l"}
              >
                Add members
              </span>
              <div
                className={theme === "dark" ? "gray" : "gray-l"}
                onClick={toggleOverlay}
              >
                <CloseIcon />
              </div>
            </div>

            <div className="invite_inviting">
              <span className={theme === "dark" ? "gray" : "gray-l"}>
                Invite via email
              </span>
              <div className="invite_inviting_email">
                <BorderedInput
                  type={"email"}
                  placeholder="Email"
                  className={"email-in"}
                />
                <button
                  className={theme === "dark" ? "success-btn" : "success-btn-l"}
                >
                  Invite
                </button>
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
                  <div className={clsx("exist-member_name", theme === "dark" ? "gray" : "gray-l")}>{member.name}</div>
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
