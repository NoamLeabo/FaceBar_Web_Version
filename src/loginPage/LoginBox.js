import IBStyle from "./LoginBox.css";
import InputGetter from "../InputGetter";
import Btn from "../Btn";
import { useEffect, useState } from "react";
import usersInfo from "../users.json";
function LoginBox() {
  const [running, setRunning] = useState(false);

  const [entry, setEntry] = useState({ user: "", password: "" }); // Define entry state

  const [username, setUsername] = useState(""); // State for username
  const [password, setPassword] = useState(""); // State for password

  
  useEffect(() => {
    if (running) {
    checkIfValid(entry);
    }
  }, [entry]);

  const clicked = () => {
    console.log("clicked");
    setRunning(true);
    setEntry({ user: username, password: password });
  };

  const checkIfValid = (entry) => {
    let isValid = false;
    for (const info of usersInfo) {
      if (info.name === entry.user && info.password === entry.password) {
        console.log("Credentials are valid");
        isValid = true;
        break;
      }
    }
    if (!isValid) {
      alert("Username or Password is incorrect!")
    }
    if (isValid){
      alert("You just entered faceBar! CONGRATZ!")
    }
  };
    return(
        <div className="col-xl-4 col-lg-4 col-md-5">
          {/* Creating a card in which we will have all components for the login-Box */}
          <div className="card loginCard">
            {/* Creating the card-body */}
            <div className="card-body">
              {/* Putting the 'Username' input-Box */}
              <InputGetter type="text" text="Username or Email" onChange={setUsername} />
              {/* Putting the 'Password' input-Box */}
              <InputGetter type="password" text="Password" onChange={setPassword} />
              {/* Creating a Log-in btn */}
              <Btn clicked={clicked} className={"fw-bolder btn"} id={"logInBtn"} text={"Log In"}/>
              {/* Adding a 'forgot password?' linker */}
              <a href="#" className="" style={{ display: 'block', marginTop: '10px' }}>Forgot password?</a>
              {/* Adding a visual divider */}
              <hr style={{ margin: '10px 0' }} />
              {/* Adding a 'create a new account' btn */}
              <Btn linking={"/details"} className={"fw-bolder btn"} id={"cNewBtn"} text={"Create new account"}/>
            </div>
          </div>
          {/* Adding some motivating text */}
          <div id="genericT">Create a Page for a celebrity, brand, or business.</div>
        </div>
    );
}

export default LoginBox;