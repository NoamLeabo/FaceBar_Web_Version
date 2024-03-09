import ImgBtn from "../../CrossScreensElements/btn/ImgBtn";
import FeedPostModal from "./FeedPostModal";
import EditPostModal from "../editPostModal/EditPostModal";
import TextPost from "./TextPost";
import { useState } from "react";
import EditComment from "../comments/EditComment";
import SharePostModal from "../sharePostModal/SharePostModal";
function FeedPost({
  _id,
  author,
  published,
  content,
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
  async function deletePost() {
    const data = await fetch("http://localhost:12345/posts/" + _id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  // const editCommListElement = commentList.map((comm, key) => {
  //   return (
  //     <EditComment
  //       editComments={editComments}
  //       originalCommentText={comm.commentText}
  //       commentId={comm.commentId}
  //       commentAuthor={comm.commentAuthor}
  //       postId={id}
  //       key={key}
  //       setCommentList={setCommentList}
  //       commentList={commentList}
  //     />
  //   );
  // });
  return (
    <div className="feed-component" data-testid={`test-post-${_id}`}>
      <TextPost
        id={_id}
        composer={author}
        time={published}
        text={content}
        likesDisp={likesDisp}
        addLike={addLike}
        filterById={filterById}
        img={img}
        remPost={deletePost}
      />
      <FeedPostModal
        id={_id}
        composer={author}
        time={published}
        text={content}
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
        remPost={deletePost}
      />

      <EditPostModal
        editPost={editPost}
        myId={_id}
        myText={content}
        myComposer={author}
        myTime={published}
        myLikes={likesDisp}
        myImg={img}
        myComments={comments}
      />
      <SharePostModal />
      {/* {editCommListElement} */}
    </div>
  );
}

export default FeedPost;
