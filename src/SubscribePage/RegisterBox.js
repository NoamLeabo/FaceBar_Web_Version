import InputGetter from "./InputGetter";
import { useEffect, useState } from "react";
import usersInfo from "./users.json";
import TestBtn from "./testButton";
function RegisterBox() {
  
  const [newSignning, setNewSignning] = useState({ name: "", password: "" }); // Define entry state

  const [users, setUsers] = useState(usersInfo); 

  const [fName, setFName] = useState(""); // State for username
  const [password, setPassword] = useState(""); // State for password
  const [username, setUsername] = useState(""); // State for password
  const [confirmPass, setConfirmPass] = useState(""); // State for password
  const [lname, setLName] = useState(""); // State for password

  
  useEffect(() => {
    checkIfValid(newSignning);
  }, [newSignning]);

  const clicked = () => {
    console.log("clicked");
    setNewSignning({ user: username, password: password });
  };

  const checkIfValid = (newSignning) => {
    if (newSignning.password !== confirmPass) {
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
        <TestBtn text="Sign Up" id="cNewBtn" className="fw-bolder btn" clicked={clicked} />
        <div className="exist_acc">
            <a href="" className="acc">Already have an account?</a>
        </div>
    </div>
    
);
}

export default RegisterBox;