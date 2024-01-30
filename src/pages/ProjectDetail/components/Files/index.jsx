import React, { useState } from "react";
import { useThemeContext } from "../../../../context/ThemeContext";
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
  const { theme } = useThemeContext();
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
          <button
            className={theme === "dark" ? "create-btn" : "create-btn-l"}
            onClick={toggleOverlay}
          >
            <span>
              <PlusIcon />
            </span>
            <span>Add file</span>
          </button>
        </div>
        <div className={theme === "dark" ? "files_head" : "files_head-l"}>
          <div>File</div>
          <div>Name</div>
          <div>Milestone</div>
          <div>Uploaded by</div>
          <div>Date</div>
          <div>Edit</div>
        </div>

        <div className="files_body">
          {files.map((file, idx) => (
            <div
              key={idx}
              className={theme === "dark" ? "files_body_el" : "files_body_el-l"}
            >
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
          <div className={theme === "dark" ? "add-files" : "add-files-l"}>
            <div className="add-files_first">
              <span
                className={theme === "dark" ? "page-title" : "page-title-l"}
              >
                Add file
              </span>
              <span
                className={theme === "dark" ? "gray" : "gray-l"}
                onClick={toggleOverlay}
              >
                <CloseIcon />
              </span>
            </div>

            <div
              className={
                theme === "dark" ? "add-files_second" : "add-files_second-l"
              }
            >
              <CloudIcon />
              <span>Drop files here or ciick upload</span>
            </div>
            <div className="add-files_third">
              <span className={theme === "dark" ? "gray" : "gray-l"}>
                Milestone
              </span>
              <div
                className={theme === "dark" ? "f-categories" : "f-categories-l"}
                onClick={toggleCategories}
              >
                <span className={theme === "dark" ? "gray" : "gray-l"}>
                  Uncategorised
                </span>
                <span className={theme === "dark" ? "gray" : "gray-l"}>
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
              <button
                className={theme === "dark" ? "cencel-btn" : "cencel-btn-l"}
              >
                Cencel
              </button>
              <button
                className={theme === "dark" ? "success-btn" : "success-btn-l"}
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

export default Files;
