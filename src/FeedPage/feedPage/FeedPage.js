import "./FeedPage.css";
import FeedPost from "../feedPost/FeedPost";
// import posts from "../feedPost/posts";
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

function FeedPage({
  loggedinUser,
  setLoggedinUser,
  activeUsers,
  gotToken,
  setProfileOwner,
}) {
  const page = useRef(null);
  const [postList, setPostList] = useState([]);
  const [friendList, setFriendList] = useState([]);
  async function deletePost(pid) {
    // await getCurrentTime();
    const data = await fetch(
      "http://localhost:12345/api/users/" +
        loggedinUser.username +
        "/posts/" +
        pid,
      {
        method: "DELETE",
        // Remove the Content-Type header
        headers: {
          "Content-Type": "application/json",
          authorization: "bearer " + gotToken,
        },
      }
    );
  }
  async function getAll() {
    const data = await fetch("http://localhost:12345/api/posts", {
      headers: {
        "Content-Type": "application/json",
        authorization: "bearer " + gotToken, // attach the token
      },
    });
    let posts = await data.json();
    setPostList(posts);
    return posts;
  }
  async function foriUsers(list) {
    let array = [];
    for (let i = 0; i < list.length; i++) {
      const data = await fetch("http://localhost:12345/api/users/" + list[i]);
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
  }, [gotToken]);

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
    // setPostList([post, ...postList]);
    getAll();
  };
  function remPost(id) {
    // var index = -1;
    // postList.find(function (item, i) {
    //   if (item.id === id) {
    //     index = i;
    //     return i;
    //   }
    // });
    // postList.splice(index, 1);
    // setPostList([...postList]);
    // postNum++;
    console.log("post id is " + id);
    deletePost(id);
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
    // var index = -1;
    // postList.find(function (item, i) {
    //   if (item.id === id) {
    //     index = i;
    //     return i;
    //   }
    // });
    // postList.splice(index, 1, newItem);
    // setPostList([...postList]);
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
    // var postIndex = -1;
    // postList.find(function (item, i) {
    //   if (item.id === postId) {
    //     postIndex = i;
    //     return i;
    //   }
    // });
    // const comments = postList[postIndex].comments;
    // var index = comments.length;
    // comments.splice(index, 1, newItem);
    // postList[postIndex].comments = comments;
    // setPostList([...postList]);
  }
  let contactList = null;
  if (friendList.length) {
    contactList = friendList.map((user, key) => {
      return (
        <Contact user={user} setProfileOwner={setProfileOwner} key={key} />
      );
    });
  }
  // console.log("postlist is " + postList);
  const postListElement = postList.map((post) => {
    console.log(post);
    return (
      <FeedPost
        {...post}
        remPost={remPost}
        editPost={editPost}
        remComment={remComment}
        editComments={editComments}
        postAddComment={postAddComment}
        key={post._id}
        getAll={getAll}
        Uname={loggedinUser.username}
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
              <div className="card" aria-hidden="true">
                {/* <img src="..." className="card-img-top" alt="..."></img> */}
                <div className="card-body">
                  <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                  </h5>
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                  </p>
                  <a
                    className="btn btn-primary disabled placeholder col-6"
                    aria-disabled="true"
                  ></a>
                </div>
              </div>
              <div className="card" aria-hidden="true">
                {/* <img src="..." className="card-img-top" alt="..."></img> */}
                <div className="card-body">
                  <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                  </h5>
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                  </p>
                  <a
                    className="btn btn-primary disabled placeholder col-6"
                    aria-disabled="true"
                  ></a>
                </div>
              </div>
              <div className="card" aria-hidden="true">
                {/* <img src="..." className="card-img-top" alt="..."></img> */}
                <div className="card-body">
                  <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                  </h5>
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                  </p>
                  <a
                    className="btn btn-primary disabled placeholder col-6"
                    aria-disabled="true"
                  ></a>
                </div>
              </div>
              <div className="card" aria-hidden="true">
                {/* <img src="..." className="card-img-top" alt="..."></img> */}
                <div className="card-body">
                  <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                  </h5>
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                  </p>
                  <a
                    className="btn btn-primary disabled placeholder col-6"
                    aria-disabled="true"
                  ></a>
                </div>
              </div>
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
