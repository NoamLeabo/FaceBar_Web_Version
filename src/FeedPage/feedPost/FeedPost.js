import FeedPostModal from "./FeedPostModal";
import EditPostModal from "../editPostModal/EditPostModal";
import TextPost from "./TextPost";
import { useState, useEffect } from "react";
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
  Uname,
  commentsNum,
  gotToken,
  // setReloader,
  // reloader,
}) {
  function filterById(jsonObject, id) {
    return jsonObject.filter(function (jsonObject) {
      return jsonObject["id"] == id;
    })[0];
  }

  const [composer, setComposer] = useState(null);
  const [commentList, setCommentList] = useState(comments);
  async function deletePost(pid) {
    // await getCurrentTime();
    const data = await fetch(
      "http://localhost:12345/api/users/" + composer.username + "/posts/" + pid,
      {
        method: "DELETE",
        // Remove the Content-Type header
        headers: {
          "Content-Type": "application/json",
          authorization: "bearer " + gotToken,
        },
      }
    );
    remPost(_id);
  }
  useEffect(() => {
    async function fetchAuthor() {
      const data = await fetch("http://localhost:12345/api/users/" + author, {
        headers: {
          "Content-Type": "application/json",
          authorization: "bearer " + gotToken,
        },
      });
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
        remPost={deletePost}
        Uname={Uname}
        gotToken={gotToken}
        // setReloader={setReloader}
        // reloader={reloader}
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
        commentList={comments}
        setCommentList={setCommentList}
        Uname={Uname}
        commentsNum={commentsNum}
        remPost={deletePost}
        gotToken={gotToken}
        // setReloader={setReloader}
        // reloader={reloader}
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
        gotToken={gotToken}
      />
      <SharePostModal />
    </div>
  );
}

export default FeedPost;
