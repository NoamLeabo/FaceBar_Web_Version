import "./FeedPage.css";
import FeedPost from "../feedPost/FeedPost";
import NavBar from "../navBar/NavBar";
import CreatePostModal from "../createPostModal/CreatePostModal";
import SideBar from "../sideBar/SideBar";
import { useState } from "react";
import ContentNotAvailable from "../contentNotAvailable/ContentNotAvailable";
import { useRef, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Contact from "../contact/Contact";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import CreatePostButton from "../createPostButton/CreatePostButton";
import LoadingPostPretty from "../loadingPostPretty/LoadingPostPretty";

function FeedPage({
  loggedinUser,
  setLoggedinUser,
  activeUsers,
  gotToken,
  setProfileOwner,
  reloader,
  setReloader,
}) {
  const page = useRef(null);
  const [postList, setPostList] = useState([]);
  const [friendList, setFriendList] = useState([]);

  async function getAll() {
    const data = await fetch("http://localhost:12345/api/posts", {
      headers: {
        "Content-Type": "application/json",
        authorization: "bearer " + gotToken,
      },
    });
    let posts = await data.json();
    setPostList(posts);
    return posts;
  }
  async function foriUsers(list) {
    let array = [];
    for (let i = 0; i < list.length; i++) {
      const data = await fetch("http://localhost:12345/api/users/" + list[i], {
        headers: {
          "Content-Type": "application/json",
          authorization: "bearer " + gotToken,
        },
      });
      const user = await data.json();
      array.push(user);
    }
    return array;
  }
  async function getFriendsList() {
    const data = await fetch(
      "http://localhost:12345/api/users/" + loggedinUser.username + "/friends",
      {
        headers: {
          "Content-Type": "application/json",
          authorization: "bearer " + gotToken,
        },
      }
    );
    let list = await data.json();
    list = await foriUsers(list);
    setFriendList(list);
  }
  useEffect(() => {
    if (gotToken) {
      getAll();
      getFriendsList();
    }
  }, [gotToken, reloader]);

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
  let postNum = 1;
  const addPost = (post) => {
    getAll();
  };
  function remPost(id) {
    getAll();
  }

  function remComment(postId, commentId, setter) {
    // var postIndex = -1;
    // postList.find(function (item, i) {
    //   if (item.id === postId) {
    //     postIndex = i;
    //     return i;
    //   }
    // });
    // const comments = postList[postIndex].comments;
    // var index = -1;
    // comments.find(function (item, i) {
    //   if (item.commentId === commentId) {
    //     index = i;
    //     return i;
    //   }
    // });
    // comments.splice(index, 1);
    // postList[postIndex].comments = comments;
    // setPostList([...postList]);
    // setter(comments);
  }

  function editPost(id, newItem) {
    getAll();
  }

  function editComments(postId, commentId, newItem, setter) {
    // var postIndex = -1;
    // postList.find(function (item, i) {
    //   if (item.id === postId) {
    //     postIndex = i;
    //     return i;
    //   }
    // });
    // const comments = postList[postIndex].comments;
    // var index = -1;
    // comments.find(function (item, i) {
    //   if (item.commentId === commentId) {
    //     index = i;
    //     return i;
    //   }
    // });
    // comments.splice(index, 1, newItem);
    // postList[postIndex].comments = comments;
    // setPostList([...postList]);
    // setter(comments);
  }

  function postAddComment(postId, newItem) {
    //   var postIndex = -1;
    //   postList.find(function (item, i) {
    //     if (item.id === postId) {
    //       postIndex = i;
    //       return i;
    //     }
    //   });
    //   const comments = postList[postIndex].comments;
    //   var index = comments.length;
    //   comments.splice(index, 1, newItem);
    //   postList[postIndex].comments = comments;
    //   setPostList([...postList]);
  }
  let contactList = null;
  if (friendList.length) {
    contactList = friendList.map((user, key) => {
      return (
        <Contact user={user} setProfileOwner={setProfileOwner} key={key} />
      );
    });
  }
  const postListElement = postList.map((post) => {
    return (
      <FeedPost
        {...post}
        remPost={remPost}
        editPost={editPost}
        key={post._id}
        getAll={getAll}
        Uname={loggedinUser.username}
        setReloader={setReloader}
        reloader={reloader}
        gotToken={gotToken}
      />
    );
  });

  return (
    <div ref={page} className="container-fluid">
      <NavBar
        loggedinUser={loggedinUser}
        setLoggedinUser={setLoggedinUser}
        activeUsers={activeUsers}
        setDarkMode={setDarkMode}
        setProfileOwner={setProfileOwner}
        setReloader={setReloader}
        reloader={reloader}
        gotToken ={gotToken}
      />
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-2">
          <SideBar />
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
            profilePic={loggedinUser.profileImg}
            composer={loggedinUser.username}
            gotToken={gotToken}
            loggedinUser={loggedinUser}
          />
          {/* <!-- Posts --> */}
          {postList.length > 0 ? (
            postListElement
          ) : (
            <div>
              <h6 style={{ margin: "10px" }}>
                {" "}
                There are no posts to display...
              </h6>
              <LoadingPostPretty />

              <LoadingPostPretty />

              <LoadingPostPretty />

              <LoadingPostPretty />
            </div>
          )}
          <ContentNotAvailable />
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-2 ps-5">
          <div
            className="list-group"
            id="side-bar"
            style={{ marginTop: "20px", paddingBottom: "100px", right: "0" }}
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
