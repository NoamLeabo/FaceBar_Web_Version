import "./FeedPage.css";
import FeedPost from "../feedPost/FeedPost";
import posts from "../feedPost/posts";
import NavBar from "../navBar/NavBar";
import CreatePostModal from "../createPostModal/CreatePostModal";
import SideBar from "../sideBar/SideBar";
import { useState } from "react";
import ContentNotAvailable from "../contentNotAvailable/ContentNotAvailable";
import { useRef } from "react";
import { Navigate } from "react-router-dom";
import Contact from "../contact/Contact";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import CreatePostButton from "../createPostButton/CreatePostButton";

function FeedPage({ loggedinUser, setLoggedinUser, activeUsers }) {
  const page = useRef(null);

  const [postList, setPostList] = useState(posts);
  if (!loggedinUser) {
    return <Navigate to="/" />;
  }
  function filterById(jsonObject, id) {
    return jsonObject.filter(function (jsonObject) {
      return jsonObject["id"] == id;
    })[0];
  }

  const setDarkMode = function (mode) {
    page.current.className = mode;
  };
  let postNum = postList.length;
  const addPost = (post) => {
    setPostList([post, ...postList]);
  };
  function remPost(id) {
    var index = -1;
    postList.find(function (item, i) {
      if (item.id === id) {
        index = i;
        return i;
      }
    });

    postList.splice(index, 1);
    setPostList([...postList]);
    postNum++;
  }

  function remComment(postId, commentId, setter) {
    var postIndex = -1;
    postList.find(function (item, i) {
      if (item.id === postId) {
        postIndex = i;
        return i;
      }
    });

    const comments = postList[postIndex].comments;
    var index = -1;
    comments.find(function (item, i) {
      if (item.commentId === commentId) {
        index = i;
        return i;
      }
    });
    comments.splice(index, 1);
    postList[postIndex].comments = comments;
    setPostList([...postList]);
    setter(comments);
  }

  function editPost(id, newItem) {
    var index = -1;
    postList.find(function (item, i) {
      if (item.id === id) {
        index = i;
        return i;
      }
    });

    postList.splice(index, 1, newItem);
    setPostList([...postList]);
  }

  function editComments(postId, commentId, newItem, setter) {
    var postIndex = -1;
    postList.find(function (item, i) {
      if (item.id === postId) {
        postIndex = i;
        return i;
      }
    });

    const comments = postList[postIndex].comments;
    var index = -1;
    comments.find(function (item, i) {
      if (item.commentId === commentId) {
        index = i;
        return i;
      }
    });

    comments.splice(index, 1, newItem);
    postList[postIndex].comments = comments;
    setPostList([...postList]);
    setter(comments);
  }

  function postAddComment(postId, newItem) {
    var postIndex = -1;
    postList.find(function (item, i) {
      if (item.id === postId) {
        postIndex = i;
        return i;
      }
    });

    const comments = postList[postIndex].comments;
    var index = comments.length;

    comments.splice(index, 1, newItem);
    postList[postIndex].comments = comments;
    setPostList([...postList]);
  }

  const postListElement = postList.map((post) => {
    return (
      <FeedPost
        {...post}
        remPost={remPost}
        editPost={editPost}
        remComment={remComment}
        editComments={editComments}
        postAddComment={postAddComment}
        key={post.id}
        Uname={loggedinUser.name}
        commentsNum={post.comments.length}
      />
    );
  });
  const contactList = activeUsers.map((user, key) => {
    return <Contact user={user} key={key} />;
  });
  return (
    <div ref={page} className="container-fluid">
      <NavBar
        loggedinUser={loggedinUser}
        setLoggedinUser={setLoggedinUser}
        activeUsers={activeUsers}
        setDarkMode={setDarkMode}
      />
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-2">
          <SideBar loggedinUser={loggedinUser} />
        </div>
        <div
          className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-6"
          id="feedmain"
        >
          <CreatePostButton loggedinUser={loggedinUser} />
          {/* <!-- Modal for creating a post--> */}
          <CreatePostModal
            addPost={addPost}
            postNum={postNum}
            FirstName={loggedinUser.FirstName}
            LastName={loggedinUser.LastName}
            composer={loggedinUser}
          />
          {/* <!-- Posts --> */}
          {postListElement}
          <ContentNotAvailable />
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-2 ps-5">
          <div
            className="list-group"
            id="side-bar"
            style={{ marginTop: "20px", paddingBottom: "100px" , right: "0"}}
          >
            Contacts:
            {contactList}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedPage;
