import FeedPage from "../FeedPage/feedPage/FeedPage";
import "./App.css";
import SubscribePage from "../SubscribePage/subscribePage/SubscribePage";
import LoginPage from "../loginPage/loginPage/LoginPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import usersInfo from "../users.json";
import ProfilePage from "../profilePage/ProfilePage";
import PostsPage from "../postsPage/PostsPage";
import axios from "axios";

function App() {
  const [activeUsers, setActiveUsers] = useState(usersInfo);
  const [gotToken, setGotToken] = useState(null);

  const setToken = function (token) {
    console.log("testing 1 2" + `bearer ${token}`);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    // axios.defaults.headers.common["authorization"] = `bearer ${token}`;
    setGotToken(token);
  };

  async function SetLoggedUser(userId) {
    const data = await fetch("http://localhost:12345/api/users/" + userId);
    let user = await data.json();
    // console.log("we set logged in as " + user);
    // console.log("Logged-in user:", user.username); // Log the entire user object
    // console.log("l:", user.lName); // Log the username property
    // console.log("f:", user.fName); // Log the email property
    setLoggedinUser(user);
  }

  // async function getAllUsers() {
  //   // const data = await fetch("http://localhost:12345/api/users");
  //   // let users = await data.json();
  //   // console.log(users);
  //   // setActiveUsers(users);
  //   // return users;
  // }
  // useEffect(() => {
  //   getAllUsers();
  // }, []);
  const [profileOwner, setProfileOwner] = useState({
    name: null,
    profileImg: null,
    FirstName: null,
    LastName: null,
  });
  const [loggedinUser, setLoggedinUser] = useState(null);
  function filterByUname(userList, Uname) {
    return userList.filter(function (userList) {
      return userList["name"] == Uname;
    })[0];
  }
  // const SetLoggedUser = function (Uname) {
  //   setLoggedinUser(filterByUname(activeUsers, Uname));
  // };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LoginPage
                activeUsers={activeUsers}
                SetLoggedUser={SetLoggedUser}
                setToken={setToken}
              />
            }
          ></Route>
          <Route
            path="/details"
            element={
              <SubscribePage
                setActiveUsers={setActiveUsers}
                activeUsers={activeUsers}
              />
            }
          ></Route>
          <Route
            path="/home"
            element={
              <FeedPage
                loggedinUser={loggedinUser}
                setLoggedinUser={setLoggedinUser}
                activeUsers={activeUsers}
                setProfileOwner={setProfileOwner}
                gotToken={gotToken}
              />
            }
          ></Route>
          <Route
            path="/users/:id"
            element={
              <ProfilePage
                loggedinUser={loggedinUser}
                setLoggedinUser={setLoggedinUser}
                activeUsers={activeUsers}
                profileOwner={profileOwner}
                setProfileOwner={setProfileOwner}
                gotToken={gotToken}
              />
            }
          ></Route>
          {/* <Route path="/posts" element={<PostsPage />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
