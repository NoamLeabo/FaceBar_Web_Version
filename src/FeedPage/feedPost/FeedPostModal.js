import FeedPost from "./FeedPost";
import TextPost from "./TextPost";
import { useState } from "react";
import Comment from "../comments/Comment";
import CreateComment from "../comments/CreateComment";
function FeedPostModal({
  id,
  composer,
  time,
  text,
  comments,
  likesDisp,
  addLike,
  remComment,
  editComments,
  commentList,
  setCommentList,
  Uname,
  img,
  remPost,
  filterById,
  commentsNum,
  postAddComment
}) {
  const addComment = (comment) => {
    setCommentList([...commentList, comment]);
    postAddComment(id, comment);
    commentsNum++;
    console.log(comment);
  };
  const commentListElement = commentList.map((comment, key) => {
    return (
      <Comment
        {...comment}
        key={key}
        remComment={remComment}
        editComments={editComments}
        postId={id}
        setCommentList={setCommentList}
      />
    );
  });
  return (
    <div
      className="modal fade post-modal"
      id={`opened-post-${id}`}
      tabIndex="-1"
      aria-labelledby="opendPostLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header"></div>
          <div className="modal-body">
            <TextPost
            id={id}
            composer={composer}
            time={time}
            text={text}
            likesDisp={likesDisp}
            addLike={addLike}
            filterById={filterById}
            img={img}
            remPost={remPost}
            />
          </div>
          {commentListElement}
          <CreateComment
            addComment={addComment}
            commId={commentsNum}
            Uname={Uname}
            editComments={editComments}
          />
        </div>
      </div>
    </div>
  );
}

export default FeedPostModal;
