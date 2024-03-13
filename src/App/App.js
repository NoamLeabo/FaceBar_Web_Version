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
import UsersPage from "../UsersPage/UsersPage";

function App() {
  const [activeUsers, setActiveUsers] = useState(usersInfo);
  const [gotToken, setGotToken] = useState(null);

  const setToken = function (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setGotToken(token);
  };

  async function SetLoggedUser(userId) {
    const data = await fetch("http://localhost:12345/api/users/" + userId);
    let user = await data.json();
    setLoggedinUser(user);
  }

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
          <Route
            path="/allUsers"
            element={
              <UsersPage
                loggedinUser={loggedinUser}
                setLoggedinUser={setLoggedinUser}
                activeUsers={activeUsers}
                setProfileOwner={setProfileOwner}
                gotToken={gotToken}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
