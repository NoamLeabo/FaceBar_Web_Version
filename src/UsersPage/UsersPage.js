import "../profilePage/ProfilePage.css";
import NavBar from "../FeedPage/navBar/NavBar";
import SideBar from "../FeedPage/sideBar/SideBar";
import { useState, useEffect } from "react";
import ContentNotAvailable from "../FeedPage/contentNotAvailable/ContentNotAvailable";
import { useRef } from "react";
import { Navigate } from "react-router-dom";
import Contact from "../FeedPage/contact/Contact";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import CreatePostButton from "../FeedPage/createPostButton/CreatePostButton";
import { useParams } from "react-router-dom";

function UsersPage({
  loggedinUser,
  setProfileOwner,
  setLoggedinUser,
  activeUsers,
  gotToken,
}) {
  const page = useRef(null);
  const [userList, setUserList] = useState([]);

  async function foriUsers(list) {
    let array = [];
    for (let i = 0; i < list.length; i++) {
      const data = await fetch("http://localhost:12345/api/users/" + list[i]);
      const user = await data.json();
      array.push(user);
    }
    return array;
  }
  async function getAllUsers() {
    const data = await fetch("http://localhost:12345/api/users/", {
      headers: {
        "Content-Type": "application/json",
        authorization: "bearer " + gotToken,
      },
    });
    let list = await data.json();
    console.log("user list befor fori");
    console.log(list);
    // list = await foriUsers(list);
    // console.log("user list after fori");
    // console.log(list);
    setUserList(list);
  }

  useEffect(() => {
    getAllUsers();
  }, [gotToken]);

  const [postList, setPostList] = useState([]);
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
    setPostList([post, ...postList]);
  };
  let usersList = null;

  if (userList.length) {
    usersList = userList.map((user, key) => {
      return (
        <Contact user={user} setProfileOwner={setProfileOwner} key={key} />
      );
    });
    console.log(usersList);
    console.log("usersList");
  }

  return (
    <div ref={page} className="container-fluid">
      <NavBar
        loggedinUser={loggedinUser}
        setLoggedinUser={setLoggedinUser}
        activeUsers={activeUsers}
        setDarkMode={setDarkMode}
        setProfileOwner={setProfileOwner}
      />
      <div className="row profileInfoRow">
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-2"></div>
        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-6"></div>
      </div>
      <div className="row">
        <div className="col-xl-2 col-lg-3 col-md-3 col-sm-3 col-xs-2"></div>
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-5">
          <div id="feedmain">{usersList}</div>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 ps-5"></div>
      </div>
    </div>
  );
}
export default UsersPage;
