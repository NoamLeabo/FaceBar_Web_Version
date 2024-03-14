import "./ProfilePage.css";
import FeedPost from "../FeedPage/feedPost/FeedPost";
import posts from "../FeedPage/feedPost/posts";
import NavBar from "../FeedPage/navBar/NavBar";
import CreatePostModal from "../FeedPage/createPostModal/CreatePostModal";
import SideBar from "../FeedPage/sideBar/SideBar";
import { useState, useEffect } from "react";
import ContentNotAvailable from "../FeedPage/contentNotAvailable/ContentNotAvailable";
import { useRef } from "react";
import { Navigate } from "react-router-dom";
import Contact from "../FeedPage/contact/Contact";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import CreatePostButton from "../FeedPage/createPostButton/CreatePostButton";
import { useParams } from "react-router-dom";

function ProfilePage({
  loggedinUser,
  setLoggedinUser,
  activeUsers,
  profileOwner,
  setProfileOwner,
  gotToken,
  setReloader,
  reloader,
}) {
  const page = useRef(null);
  const { id } = useParams();
  const [friendList, setFriendList] = useState([]);
  const [friendNameList, setFriendNameList] = useState([]);

  const [friendReqList, setFriendReqList] = useState([]);
  const [createPoseElement, setCreatePoseElement] = useState(null);
  const [friendReqBtn, setFriendReqBtn] = useState(null);
  const [contacts, setContacts] = useState(null);
  const friendreqbtn = useRef(null);

  let contactList = null;
  let requestsList = null;
  async function updateLoggedInUser() {
    const data = await fetch(
      "http://localhost:12345/api/users/" + loggedinUser.username,
      {
        headers: {
          "Content-Type": "application/json",
          authorization: "bearer " + gotToken,
        },
      }
    );
    const user = await data.json();

    setLoggedinUser(user);
  }
  async function sendFriendRequest() {
    const data = await fetch(
      "http://localhost:12345/api/users/" + profileOwner.username + "/friends",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: "bearer " + gotToken,
        },
        body: JSON.stringify({
          fid: loggedinUser.username,
        }),
      }
    );
    friendreqbtn.current.className = "btn btn-primary btn-lg disabled";
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
  async function getRequestList() {
    let array = loggedinUser.pending;

    array = await foriUsers(array);
    setFriendReqList(array);
  }

  async function getFriendsList() {
    const data = await fetch(
      "http://localhost:12345/api/users/" + profileOwner.username + "/friends",
      {
        headers: {
          "Content-Type": "application/json",
          authorization: "bearer " + gotToken,
        },
      }
    );
    let list = await data.json();
    setFriendNameList(list);
    list = await foriUsers(list);
    setFriendList(list);
  }
  async function acceptFriend(friend) {
    await fetch(
      "http://localhost:12345/api/users/" +
        profileOwner.username +
        "/friends/" +
        friend,
      {
        method: "PATCH",

        headers: {
          "Content-Type": "application/json",
          authorization: "bearer " + gotToken,
        },
      }
    );
    setFriendReqList((prevList) =>
      prevList.filter((user) => user.username !== friend)
    );
    await getFriendsList();
    await updateLoggedInUser();
  }
  async function rejectFriend(friend) {
    await fetch(
      "http://localhost:12345/api/users/" +
        profileOwner.username +
        "/friends/" +
        friend,
      {
        method: "DELETE",

        headers: {
          "Content-Type": "application/json",
          authorization: "bearer " + gotToken,
        },
      }
    );
    setFriendReqList((prevList) =>
      prevList.filter((user) => user.username !== friend)
    );
    await getFriendsList();
    await updateLoggedInUser();
  }
  const [profileusername, setProfileusername] = useState(null);
  useEffect(() => {
    if (profileOwner.username === loggedinUser.username) {
      getRequestList();
    } else {
    }
    getFriendsList();
  }, [profileOwner]);
  useEffect(() => {
    let infriends = false;
    if (friendNameList.length) {
      if (friendNameList.includes(loggedinUser.username)) infriends = true;
    }
    if (profileOwner.username === loggedinUser.username || infriends) {
      setFriendReqBtn(null);
      getUsersPosts();
      if (profileOwner.username === loggedinUser.username) {
        setProfileusername("me");
        setCreatePoseElement(
          <>
            <CreatePostButton loggedinUser={loggedinUser} />
            <CreatePostModal
              addPost={addPost}
              postNum={postNum}
              profilePic={loggedinUser.profileImg}
              FirstName={loggedinUser.fName}
              LastName={loggedinUser.lName}
              composer={loggedinUser.username}
              loggedinUser={loggedinUser}
              gotToken={gotToken}
            />
          </>
        );
      }
      setContacts(
        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 ps-5">
          <div
            className="list-group"
            style={{ marginTop: "20px", paddingBottom: "100px", right: "0" }}
          >
            Contacts:
            {contactList}
            {requestsList}
          </div>
        </div>
      );
    } else {
      setContacts(null);
      setCreatePoseElement(null);
      setFriendReqBtn(
        <button
          type="button"
          ref={friendreqbtn}
          className="btn btn-primary btn-lg"
          onClick={sendFriendRequest}
          style={{
            marginTop: "20px",
          }}
        >
          <i
            style={{
              marginRight: "20px",
            }}
            className="bi bi-person-fill-add"
          ></i>
          add to friends
        </button>
      );
    }
    if (friendreqbtn.current) {
      if (profileOwner.pending.includes(loggedinUser.username)) {
        friendreqbtn.current.className = "btn btn-primary btn-lg disabled";
      } else {
        friendreqbtn.current.className = "btn btn-primary btn-lg";
      }
    }
  }, [profileOwner, friendList, friendReqList]);

  const [postList, setPostList] = useState([]);
  async function getUsersPosts() {
    let data = await fetch(
      "http://localhost:12345/api/users/" + profileOwner.username + "/posts",
      {
        headers: {
          "Content-Type": "application/json",
          authorization: "bearer " + gotToken,
        },
      }
    );
    let posts = await data.json();
    setPostList(posts);
  }
  if (!loggedinUser) {
    return <Navigate to="/" />;
  }
  function filterById(jsonObject, id) {
    return jsonObject.filter(function (jsonObject) {
      return jsonObject["id"] == id;
    })[0];
  }
  const setDarkMode = function (mode) {
    if (page.current) {
      page.current.className = mode;
    }
  };
  let postNum = postList.length;
  const addPost = (post) => {
    getUsersPosts();
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
    getUsersPosts();
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
    getUsersPosts();
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

  if (friendList.length || friendReqList.length) {
    contactList = friendList.map((user, key) => {
      return (
        <div key={key} className="contact-container">
          <Contact user={user} setProfileOwner={setProfileOwner} key={key} />
          {loggedinUser.username === profileOwner.username && (
            <button
              type="button"
              className="btn btn-secondary float-end"
              onClick={() => rejectFriend(user.username)}
              style={{ marginBlockStart: "20px" }}
            >
              Delete
            </button>
          )}
        </div>
      );
    });
    requestsList = friendReqList.map((user, key) => {
      return (
        <div key={key}>
          <Contact user={user} setProfileOwner={setProfileOwner} />
          <div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => acceptFriend(user.username)}
              style={{ marginBlockStart: "20px" }}
            >
              Accept
            </button>
            <button
              type="button"
              className="btn btn-secondary float-end"
              onClick={() => rejectFriend(user.username)}
              style={{ marginBlockStart: "20px" }}
            >
              Reject
            </button>
          </div>
        </div>
      );
    });
  }
  const postListElement = postList.map((post) => {
    if (post) {
      return (
        <FeedPost
          {...post}
          remPost={remPost}
          editPost={editPost}
          remComment={remComment}
          editComments={editComments}
          postAddComment={postAddComment}
          key={post._id}
          Uname={loggedinUser.username}
          setReloader={setReloader}
          reloader={reloader}
          gotToken={gotToken}
        />
      );
    }
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
      />
      <div className="row profileInfoRow">
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-2"></div>
        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div className="list-group-item list-group-item-action profileInfo">
            <img
              src={`data:image/jpeg;base64,${profileOwner.profileImg}`}
              className="ProfPagePic rounded-circle img-cover ratio ratio-1x1 overflow-hidden"
              width={"1000px"}
              alt=""
            />
            <h2 className="userNameDisp">
              {profileOwner.fName} {profileOwner.lName}
            </h2>
            {friendReqBtn}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-2 col-lg-3 col-md-3 col-sm-3 col-xs-2"></div>
        {contacts}
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-5">
          <div id="feedmain">
            {createPoseElement}
            {postList.length > 0 && postListElement}
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 ps-5"></div>
      </div>
    </div>
  );
}
export default ProfilePage;
