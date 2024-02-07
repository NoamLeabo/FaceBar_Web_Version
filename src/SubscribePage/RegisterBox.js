import InputGetter from "../InputGetter";
import { useEffect, useState, useRef } from "react";
import Btn from "../Btn";
function RegisterBox({setActiveUsers, activeUsers}) {

  const [newEntry, setNewEntry] = useState({"name": "def", "password": "def"})
    
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

  const clicked = () => {
    const newU = {
      "name": uName.current,	
      "password": uPassword.current
    }
    checkIfValid(newU)
  };

  const checkIfValid = (newU) => {
    console.log("im in regi")
    if (newU.password !== uCPass.current) {
      alert("Passwords do not match!");
      return;
    }
    if (newU.name !== "" && newU.password !== "") {
      setActiveUsers([...activeUsers, newU]);
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
            <a href="#" className="acc">Already have an account?</a>
        </div>
    </div>
    
);
}

export default RegisterBox;