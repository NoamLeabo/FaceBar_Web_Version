
import FeedPage from "../FeedPage/feedPage/FeedPage";
import './App.css';
import SubscribePage from '../SubscribePage/subscribePage/SubscribePage';
import LoginPage from '../loginPage/loginPage/LoginPage';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react';
import usersInfo from "../users.json"

function App() {
  
  const[activeUsers, setActiveUsers] = useState(usersInfo)
  
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage activeUsers={activeUsers}/> }></Route>
      <Route path="/details" element={<SubscribePage setActiveUsers={setActiveUsers} activeUsers={activeUsers} />}></Route>
      <Route path="/home" element={<FeedPage />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
