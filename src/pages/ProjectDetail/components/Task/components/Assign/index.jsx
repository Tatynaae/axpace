import React, { useEffect, useRef, useState } from "react";
import PlusIcon from "../../../../../../assets/icons/PlusIcon";
import MemberIcon from "../../../../../../assets/icons/MemberIcon";
import AssignArrowIcon from "../../../../../../assets/icons/AssignArrowIcon";
import "./Assign.scss";

const Assign = ({ el, project }) => {
  const [membersModal, setMembersModal] = useState(false);
  const [searchMember, setSearchMember] = useState("");
  const searchMemberRef = useRef();

  const handleChangeSearchMember = (e) => {
    e.stopPropagation();
    setSearchMember(e.target.value);
  };

  const openMembersModal = (e) => {
    e.stopPropagation();
    setMembersModal(true);
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
        <div className="membersModal">
          <div className="membersModal_block">
            <div className="assign-arrow">
              <AssignArrowIcon />
            </div>
            <div className="membersModal_block_top">
              <input
                type="text"
                ref={searchMemberRef}
                placeholder="Placeholder_input"
                onChange={handleChangeSearchMember}
                onBlur={handleBlurSeach}
              />
              <span>or</span>
              <button className="success-btn">Assign to me</button>
            </div>
            <div className="membersModal_block_bottom">
              {project.members.map((member) => (
                <div
                  className="list"
                  key={member.id}
                >
                  <MemberIcon />
                  <span>{member.name}</span>
                </div>
              ))}
              <div className="invite">
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
