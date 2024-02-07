import './App.css';
import SubscribePage from './SubscribePage/SubscribePage';
import LoginPage from './loginPage/LoginPage';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />    }></Route>
      <Route path="/details" element={<SubscribePage />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
