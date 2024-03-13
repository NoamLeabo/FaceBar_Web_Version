import ImgBtn from "../../CrossScreensElements/btn/ImgBtn";
import FeedPostModal from "./FeedPostModal";
import EditPostModal from "../editPostModal/EditPostModal";
import TextPost from "./TextPost";
import { useState, useEffect } from "react";
import EditComment from "../comments/EditComment";
import SharePostModal from "../sharePostModal/SharePostModal";

function FeedPost({
  _id,
  author,
  profilePic,
  published,
  content,
  comments,
  usersWhoLiked,
  imageView,
  numOfLikes,
  remPost,
  editPost,
  remComment,
  editComments,
  getAll,
  Uname,
  commentsNum,
  postAddComment,
}) {
  function filterById(jsonObject, id) {
    return jsonObject.filter(function (jsonObject) {
      return jsonObject["id"] == id;
    })[0];
  }

  const [composer, setComposer] = useState(null);
  const [commentList, setCommentList] = useState(comments);

  useEffect(() => {
    async function fetchAuthor() {
      const data = await fetch("http://localhost:12345/api/users/" + author);
      const user = await data.json();
      setComposer(user);
    }
    fetchAuthor();
  }, [author]);

  let likesDisp;
  const [likenum, setLikes] = useState(usersWhoLiked.length);

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
    const data = await fetch("http://localhost:12345/api/posts/" + _id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  if (!composer) {
    return null; // Return null or any other loading indicator while composer is being fetched
  }
  return (
    <div className="feed-component" data-testid={`test-post-${_id}`}>
      <TextPost
        id={_id}
        composer={composer}
        profilePic={profilePic}
        time={published}
        text={content}
        usersWhoLiked={usersWhoLiked}
        likesDisp={likesDisp}
        addLike={addLike}
        filterById={filterById}
        img={imageView}
        remPost={remPost}
        Uname={Uname}
      />
      <FeedPostModal
        id={_id}
        composer={composer}
        profilePic={profilePic}
        time={published}
        text={content}
        usersWhoLiked={usersWhoLiked}
        comments={comments}
        likesDisp={likesDisp}
        addLike={addLike}
        filterById={filterById}
        img={imageView}
        remComment={remComment}
        editComments={editComments}
        commentList={comments}
        setCommentList={setCommentList}
        Uname={Uname}
        commentsNum={commentsNum}
        postAddComment={postAddComment}
        remPost={remPost}
      />

      <EditPostModal
        editPost={editPost}
        myId={_id}
        myText={content}
        myComposer={composer}
        myTime={published}
        myLikes={likesDisp}
        myImg={imageView}
        myComments={comments}
        getAll={getAll}
      />
      <SharePostModal />
    </div>
  );
}

export default FeedPost;
