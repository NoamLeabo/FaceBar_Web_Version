import InputGetter from "../InputGetter";
import { useEffect, useState, useRef } from "react";
import usersInfo from "../users.json";
import Btn from "../Btn";
function RegisterBox() {
  
  const [newSignning, setNewSignning] = useState({ name: "", password: "" }); // Define entry state

  const [users, setUsers] = useState(usersInfo); 
  
  const uName = useRef('');
  const uLName = useRef('');
  const uFName = useRef('');
  const uCPass = useRef('');
  const uPassword = useRef('');

  const setUsername = function(newUsername) {
    uName.current = newUsername;
  }
  const setPassword = function(newPassword) {
    uPassword.current = newPassword;
  }
  
  const setFName = function(newFName) {
    uFName.current = newFName;
  }
  
  const setLName = function(newLName) {
    uLName.current = newLName;
  }
  
  const setConfirmPass = function(newCPass) {
    uCPass.current = newCPass;
  }
  
  useEffect(() => {
    checkIfValid(newSignning);
  }, [newSignning]);

  const clicked = () => {
    console.log("clicked");
    setNewSignning({ user: uName.current, password: uPassword.current });
  };

  const checkIfValid = (newSignning) => {
    if (uPassword.current !== uCPass.current) {
      alert("Passwords do not match!");
      return;
    }
    if (newSignning.user !== "" && newSignning.password !== "") {
      const newU = {
        "name": newSignning.user,	
        "password": newSignning.password
      };
      setUsers([...usersInfo, newU]);
    }
  };

  
  

  return (
    <div className='InputBox'>
        <form>
            <InputGetter type="text" text="First Name" onChange={setFName} />
            <InputGetter type="text" text="Last Name" onChange={setLName} />
            <InputGetter type="text" text="Username" onChange={setUsername} />
            <InputGetter type="password" text="Password" onChange={setPassword} />
            <InputGetter type="password" text="Confirm Password" onChange={setConfirmPass} />
            <br></br>
            <input type="file" id="picture" accept="image/*"/>
        </form>
        <Btn linking={"/"} text="Sign Up" id="cNewBtn" className="fw-bolder btn" clicked={clicked} />
        <div className="exist_acc">
            <a href="" className="acc">Already have an account?</a>
        </div>
    </div>
    
);
}

export default RegisterBox;