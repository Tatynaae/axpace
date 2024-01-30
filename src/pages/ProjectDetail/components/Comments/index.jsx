import React, { useState } from "react";
import clsx from "clsx";
import { useThemeContext } from "../../../../context/ThemeContext";
import PlusIcon from "../../../../assets/icons/PlusIcon";
import TypographyIcon from "../../../../assets/icons/TypographyIcon";
import SmileIcon from "../../../../assets/icons/SmileIcon";
import AtSymbolIcon from "../../../../assets/icons/AtSymbolIcon";
import AttachIcon from "../../../../assets/icons/AttachIcon";
import "./Comments.scss";

const Comments = () => {
  const { theme } = useThemeContext();
  const [commentText, setCommentText] = useState("");
  const [addComment, setAddComment] = useState(false);
  const [comments, setComments] = useState([
    {
      text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con",
    },
    {
      text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con",
    },
    {
      text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil ",
    },
  ]);

  const handleChangeAddComment = (e) => {
    setCommentText(e.target.value);
  };

  const handleFocusAddComment = () => {
    setAddComment(true);
  };

  const handleAddComment = (e) => {
    e.stopPropagation();
    if (commentText.trim().length > 0) {
      setComments([...comments, { text: commentText }]);
      setCommentText("");
    }
  };

  return (
    <section className="comments-comp">
      <div
        className={
          theme === "dark"
            ? "comments-comp_container"
            : "comments-comp_container-l"
        }
      >
        <div className="comments-comp_all">
          {comments.map((comment) => (
            <div className="comments-comp_all_comment">
              <div className="comments-comp_all_comment_top">
                <div className="user-image">JS</div>
                <div className={theme === "dark" ? "user-name" : "user-name-l"}>
                  User name
                </div>
                <div className="circle"></div>
                <div className="comment-date">81 minutes ago</div>
              </div>
              <div
                className={
                  theme === "dark"
                    ? "comments-comp_all_comment_bottom"
                    : "comments-comp_all_comment_bottom-l"
                }
              >
                {comment.text}
              </div>
            </div>
          ))}
        </div>
        <div className={"comment"}>
          <div
            className={
              addComment
                ? theme === "dark"
                  ? "addComment"
                  : "addComment-l"
                : ""
            }
          >
            <textarea
              className={clsx(
                "addCommentTextarea",
                theme === "dark"
                  ? "addCommentTextarea-d"
                  : "addCommentTextarea-l"
              )}
              placeholder="Add a comment"
              value={commentText}
              onChange={(e) => handleChangeAddComment(e)}
              onFocus={handleFocusAddComment}
            ></textarea>
            {addComment ? (
              <div className="addComment_add">
                <div
                  className={
                    theme === "dark"
                      ? "addComment_add_left"
                      : "addComment_add_left-l"
                  }
                >
                  <div>
                    <PlusIcon />
                  </div>
                  <div>
                    <TypographyIcon />
                  </div>
                  <div>
                    <SmileIcon />
                  </div>
                  <div>
                    <AtSymbolIcon />
                  </div>
                  <div>
                    <AttachIcon />
                  </div>
                </div>
                <div className="addComment_add_right">
                  <button
                    className={
                      theme === "dark" ? "success-btn" : "success-btn-l"
                    }
                    onClick={(e) => handleAddComment(e)}
                  >
                    Comment
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
