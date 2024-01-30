import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useThemeContext } from "../../../../../../context/ThemeContext";
import PlusIcon from "../../../../../../assets/icons/PlusIcon";
import MemberIcon from "../../../../../../assets/icons/MemberIcon";
import AssignArrowIcon from "../../../../../../assets/icons/AssignArrowIcon";
import AssignArrowIconLight from "../../../../../../assets/icons/AssignArrowIconLight";
import BorderedInput from "../../../../../../components/UI/BorderedInput";
import "./Assign.scss";

const Assign = ({ el, project }) => {
  const { theme } = useThemeContext();
  const [membersModal, setMembersModal] = useState(false);
  const [searchMember, setSearchMember] = useState("");
  const searchMemberRef = useRef();

  const handleChangeSearchMember = (e) => {
    e.stopPropagation();
    setSearchMember(e.target.value);
  };

  const toggleMembersModal = () => {
    setMembersModal(!membersModal);
  };
  const openMembersModal = (e) => {
    e.stopPropagation();
    toggleMembersModal();
  };

  const handleClickSearch = (e) => {
    e.stopPropagation();
  };

  const handleBlurSeach = () => {
    setMembersModal(false);
  };

  useEffect(() => {
    if (membersModal && searchMemberRef.current) {
      searchMemberRef.current.focus();
    }
  }, [membersModal]);

  return (
    <div className="member" onClick={(e) => openMembersModal(e)}>
      JS
      {membersModal && (
        <div
          className={clsx(
            "membersModal",
            theme === "dark" ? "membersModal-d" : "membersModal-l"
          )}
        >
          <div className="membersModal_block">
            <div className="assign-arrow">
              {theme === "dark" ? (
                <AssignArrowIcon />
              ) : (
                <AssignArrowIconLight />
              )}
            </div>
            <div className="membersModal_block_top">
              <BorderedInput
                type="text"
                ref={searchMemberRef}
                placeholder="Placeholder_input"
                onChange={handleChangeSearchMember}
                onBlur={handleBlurSeach}
                onClick={(e) => handleClickSearch(e)}
              />
              <span>or</span>
              <button
                className={theme === "dark" ? "success-btn" : "success-btn-l"}
              >
                Assign to me
              </button>
            </div>
            <div
              className={
                theme === "dark"
                  ? "membersModal_block_bottom-d"
                  : "membersModal_block_bottom-l"
              }
            >
              {project.members.map((member) => (
                <div className="list" key={member.id}>
                  <div className={theme === "dark" ? "gray" : "gray-l"}>
                    <MemberIcon />
                  </div>
                  <span>{member.name}</span>
                </div>
              ))}
              <div className="invite-btn">
                <PlusIcon />
                <span>Invite via email</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assign;
