
import FeedPage from "../FeedPage/feedPage/FeedPage";
import './App.css';
import SubscribePage from '../SubscribePage/subscribePage/SubscribePage';
import LoginPage from '../loginPage/loginPage/LoginPage';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react';
import usersInfo from "../users.json"

function App() {
  
  const[activeUsers, setActiveUsers] = useState(usersInfo);
  const[loggedinUser, setLoggedinUser] = useState(null);
  // Get a user by username
  function filterByUname(userList, Uname) {return userList.filter(function(userList) {return (userList['name'] == Uname);})[0];}
  const SetLoggedUser = function (Uname){
    console.log(Uname);
    console.log(filterByUname(activeUsers, Uname))
    setLoggedinUser(filterByUname(activeUsers, Uname));
  }
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage activeUsers={activeUsers} SetLoggedUser = {SetLoggedUser}/> }></Route>
      <Route path="/details" element={<SubscribePage setActiveUsers={setActiveUsers} activeUsers={activeUsers} />}></Route>
      <Route path="/home" element={<FeedPage loggedinUser={loggedinUser} />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
