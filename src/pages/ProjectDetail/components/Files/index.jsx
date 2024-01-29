import React, { useState } from "react";
import Overlay from "../../../../components/Overlay";
import user from "../../../../assets/images/user1.png";
import FileIcon from "../../../../assets/icons/FileIcon";
import EditIcon from "../../../../assets/icons/EditIcon";
import PlusIcon from "../../../../assets/icons/PlusIcon";
import CloudIcon from "../../../../assets/icons/CloudIcon";
import CloseIcon from "../../../../assets/icons/CloseIcon";
import ArrowDown from "../../../../assets/icons/ArrowDown";
import ModalList from "../../../../components/UI/ModalList";
import DeleteIcon from "../../../../assets/icons/DeleteIcon";
import DownloadIcon from "../../../../assets/icons/DownloadIcon";
import "./Files.scss";

const Files = () => {
  const files = new Array(4).fill("Lorem ipsum");
  const [addFile, setAddFile] = useState(false);
  const [categories, setCategories] = useState(false);

  const categoriesList = [
    { title: "Planning" },
    { title: "Design" },
    { title: "Development" },
    { title: "Design" },
  ];

  const toggleOverlay = () => {
    setAddFile(!addFile);
  };

  const toggleCategories = () => {
    setCategories(!categories);
  };
  return (
    <>
      <div className="files">
        <div className="files_add">
          <button className="gray" onClick={toggleOverlay}>
            <span>
              <PlusIcon />
            </span>
            <span>Add file</span>
          </button>
        </div>
        <div className="files_head">
          <div>File</div>
          <div>Name</div>
          <div>Milestone</div>
          <div>Uploaded by</div>
          <div>Date</div>
          <div>Edit</div>
        </div>

        <div className="files_body">
          {files.map((file, idx) => (
            <div key={idx} className="files_body_el">
              <div>
                <FileIcon />
              </div>
              <div>{file}</div>
              <div>Design</div>
              <div>
                <span className="u-img">
                  <img src={user} alt="" />
                </span>
                <span>Name</span>
              </div>
              <div>Design</div>
              <div>
                <span>
                  <EditIcon />
                </span>
                <span>
                  <DeleteIcon />
                </span>
                <span>
                  <DownloadIcon />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {addFile ? (
        <Overlay close={toggleOverlay}>
          <div className="add-files">
            <div className="add-files_first">
              <span className="page-title">Add file</span>
              <span className="gray" onClick={toggleOverlay}>
                <CloseIcon />
              </span>
            </div>

            <div className="add-files_second">
              <CloudIcon />
              <span>Drop files here or ciick upload</span>
            </div>
            <div className="add-files_third">
              <span>Milestone</span>
              <div className="f-categories" onClick={toggleCategories}>
                <span>Uncategorised</span>
                <span>
                  <ArrowDown />
                </span>
                {categories ? (
                  <div className="f-categories_modal">
                    <ModalList list={categoriesList} />
                  </div>
                ) : null}
              </div>
            </div>
            <div className="add-files_fours">
              <button className="cencel-btn">Cencel</button>
              <button className="success-btn">Save</button>
            </div>
          </div>
        </Overlay>
      ) : null}
    </>
  );
};

export default Files;
