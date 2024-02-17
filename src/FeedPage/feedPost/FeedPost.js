import ImgBtn from "../../CrossScreensElements/btn/ImgBtn";
import FeedPostModal from "./FeedPostModal";
import EditPostModal from "../editPostModal/EditPostModal";
import TextPost from "./TextPost";
import { useState } from "react";
import EditComment from "../comments/EditComment";
import SharePostModal from "../sharePostModal/SharePostModal";
function FeedPost({
  id,
  composer,
  time,
  text,
  comments,
  img,
  likes,
  remPost,
  editPost,
  remComment,
  editComments,
  Uname,
  commentsNum,
  postAddComment,
}) {
  function filterById(jsonObject, id) {
    return jsonObject.filter(function (jsonObject) {
      return jsonObject["id"] == id;
    })[0];
  }
  const [commentList, setCommentList] = useState(comments);

  let likesDisp;
  const [likenum, setLikes] = useState(likes);
  if (likenum > 999) {
    likesDisp = "999+";
  } else {
    likesDisp = likenum;
  }
  const addLike = function (stat) {
    setLikes((l) => l + stat);
    if (likenum > 999) {
      likesDisp = "999+";
    } else {
      likesDisp = likenum;
    }
  };
  const editCommListElement = commentList.map((comm, key) => {
    return (
      <EditComment
        editComments={editComments}
        originalCommentText={comm.commentText}
        commentId={comm.commentId}
        commentAuthor={comm.commentAuthor}
        postId={id}
        key={key}
        setCommentList={setCommentList}
        commentList={commentList}
      />
    );
  });
  return (
    <div className="feed-component" data-testid={`test-post-${id}`}>
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
      <FeedPostModal
        id={id}
        composer={composer}
        time={time}
        text={text}
        comments={comments}
        likesDisp={likesDisp}
        addLike={addLike}
        filterById={filterById}
        img={img}
        remComment={remComment}
        editComments={editComments}
        commentList={commentList}
        setCommentList={setCommentList}
        Uname={Uname}
        commentsNum={commentsNum}
        postAddComment={postAddComment}
        remPost={remPost}
      />

      <EditPostModal
        editPost={editPost}
        myId={id}
        myText={text}
        myComposer={composer}
        myTime={time}
        myLikes={likesDisp}
        myImg={img}
        myComments={comments}
      />
      <SharePostModal />
      {editCommListElement}
    </div>
  );
}

export default FeedPost;
