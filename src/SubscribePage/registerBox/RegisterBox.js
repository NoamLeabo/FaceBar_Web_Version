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
    // regex for checking
    let checkPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    let checkName = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;
    let checkUsername = /^[a-zA-Z0-9_-]{4,16}$/;

    if(uName.current === "" || uPassword.current === "" || uFName.current === "" || uLName.current === "" || uCPass.current === ""){
      alert("Please fill in all fields!");
      return;
    }
    if(!uName.current.match(checkUsername)){
      alert("Username must contain only letters, numbers, underscores and hyphens and be between 4 and 16 characters long")
      return;
    }
    if(!uPassword.current.match(checkPassword)){
      alert("Password must contain at least 8 characters, including uppercase, lowercase letters and numbers")
      return;
    }
    if(!uLName.current.match(checkName) || !uFName.current.match(checkName)){
      alert("name must contain only letters")
      return;
    }
    if(image === null){
      alert("Please upload a profile picture!");
      return;
    }
    if (newU.password !== uCPass.current) {
      alert("Passwords do not match!");
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
            <InputGetter type="text" text="First Name" onChange={setFName} title="first name must contain only letters"/>
            <InputGetter type="text" text="Last Name" onChange={setLName} title="last name must contain only letters" />
            <InputGetter type="text" text="Username" onChange={setUsername} title="must contain at least 8 characters, including uppercase, lowercase letters and numbers" />
            <InputGetter type="password" text="Password" onChange={setPassword} title="must contain at least 8 characters, including uppercase, lowercase letters and numbers" />
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