import IBStyle from "./LoginBox.css";
import InputGetter from "../../CrossScreensElements/inputGetter/InputGetter";
import Btn from "../../CrossScreensElements/btn/Btn";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ForgotPasswordToast from "../toasts/ForgotPasswordToast";
// import Toast from 'react-bootstrap/Toast';

function LoginBox({ activeUsers, SetLoggedUser }) {
  const toastTrigger = useRef(null);

  const navigate = useNavigate();
  const [running, setRunning] = useState(false);

  const [entry, setEntry] = useState({ user: "", password: "" }); // Define entry state
  const uName = useRef("");
  const uPassword = useRef("");

  const setUsername = function (newUsername) {
    uName.current = newUsername;
  };
  const setPassword = function (newPassword) {
    uPassword.current = newPassword;
  };

  useEffect(() => {
    if (running) {
      checkIfValid(entry);
    }
  }, [entry]);

  const clickedLogIn = () => {
    setRunning(true);
    setEntry({ user: uName.current, password: uPassword.current });
    SetLoggedUser(uName.current);
  };

  const checkIfValid = (entry) => {
    let isValid = false;
    for (const aUser of activeUsers) {
      if (aUser.name === entry.user && aUser.password === entry.password) {
        isValid = true;
        break;
      }
    }
    if (!isValid) {
      alert("Username or Password is incorrect!");
    }
    if (isValid) {
      navigate("/home");
    }
  };

  const newNavigation = function () {
    navigate("/details");
  };
  return (
    <div className="col-xl-4 col-lg-4 col-md-5">
      {/* Creating a card in which we will have all components for the login-Box */}
      <div className="card loginCard">
        {/* Creating the card-body */}
        <div className="card-body">
          {/* Putting the 'Username' input-Box */}
          <InputGetter
            type="text"
            text="Username or Email"
            onChange={setUsername}
          />
          {/* Putting the 'Password' input-Box */}
          <InputGetter type="password" text="Password" onChange={setPassword} />
          {/* Creating a Log-in btn */}
          <Btn
            clicked={clickedLogIn}
            className={"fw-bolder btn"}
            id={"logInBtn"}
            text={"Log In"}
          />
          {/* Adding a 'forgot password?' linker */}
          <a
            href="#"
            onClick={() => {
              navigate("/details");
              alert("Create another account then :)");
            }}
            className=""
            style={{ marginTop: "10px" }}
          >
            Forgot password?
          </a>
          {/* Adding a visual divider */}
          <hr style={{ margin: "10px 0" }} />
          {/* Adding a 'create a new account' btn */}
          <Btn
            clicked={newNavigation}
            className={"fw-bolder btn"}
            id={"cNewBtn"}
            text={"Create new account"}
          />
        </div>
      </div>
      {/* Adding some motivating text */}
      <div id="genericT">
        Create a Page for a celebrity, brand, or business.
      </div>
    </div>
  );
}

export default LoginBox;
