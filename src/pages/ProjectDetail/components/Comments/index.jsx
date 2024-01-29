import React, { useState } from "react";
import PlusIcon from "../../../../assets/icons/PlusIcon";
import TypographyIcon from "../../../../assets/icons/TypographyIcon";
import SmileIcon from "../../../../assets/icons/SmileIcon";
import AtSymbolIcon from "../../../../assets/icons/AtSymbolIcon";
import AttachIcon from "../../../../assets/icons/AttachIcon";
import './Comments.scss';

const Comments = () => {
  const [commentText, setCommentText] = useState("");
  const [addComment, setAddComment] = useState(false);
  const [comments, setComments] = useState([
    {
      text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con",
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
      <div className="comments-comp_container">
      <div className="comments-comp_all">
        {comments.map((comment) => (
          <div className="comments-comp_all_comment">
            <div className="comments-comp_all_comment_top">
              <div className="user-image">JS</div>
              <div className="user-name">User name</div>
              <div className="circle"></div>
              <div className="comment-date">81 minutes ago</div>
            </div>
            <div className="comments-comp_all_comment_bottom">{comment.text}</div>
          </div>
        ))}
      </div>
      <div className={"comment"}>
        <div className={addComment ? "addComment" : ""}>
          <textarea
            className="addCommentTextarea"
            placeholder="Add a comment"
            value={commentText}
            onChange={(e) => handleChangeAddComment(e)}
            onFocus={handleFocusAddComment}
          ></textarea>
          {addComment ? (
            <div className="addComment_add">
              <div className="addComment_add_left">
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
                  className="success-btn"
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
