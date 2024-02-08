import InputGetter from "../../CrossScreensElements/inputGetter/InputGetter";
import RBStyle from "./RegisterBox.css"
import { useEffect, useState, useRef} from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../../CrossScreensElements/btn/Btn";
function RegisterBox({setActiveUsers, activeUsers}) {
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const handleChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  }
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
    let check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    if(!uPassword.current.match(check)){
      alert("Password must contain at least 8 characters, including uppercase, lowercase letters and numbers")
      return;
    }
    if (newU.password !== uCPass.current) {
      alert("Passwords do not match!");
      return;
    }
    if(uName.current === "" || uPassword.current === "" || uFName.current === "" || uLName.current === "" || uCPass.current === ""){
      alert("Please fill in all fields!");
      return;
    }
    if (newU.name !== "" && newU.password !== "") {
      setActiveUsers([...activeUsers, newU]);
      navigate("/")
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
            <input type="file" id="picture" accept="image/*" onChange={handleChange} hidden/>
            <label for="picture" id="label">Choose a profile picture</label>
            <img src={image} id="image" alt=""/>
        <div className="btn_sign">
        <Btn text="Sign Up" id="cNewBtn" className="fw-bolder btn" clicked={clicked} />
        </div>
        </form>
        <div className="exist_acc">
            <a href="/" className="acc">Already have an account?</a>
        </div>
    </div>
    
);
}

export default RegisterBox;