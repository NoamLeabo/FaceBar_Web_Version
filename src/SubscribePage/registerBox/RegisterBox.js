import InputGetter from "../../CrossScreensElements/inputGetter/InputGetter";
import RBStyle from "./RegisterBox.css";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import UploadAndDisplayImage from "../../CrossScreensElements/modals/uploadAndDisplayImage/UploadAndDisplayImage";
import Btn from "../../CrossScreensElements/btn/Btn";
function RegisterBox({ setActiveUsers, activeUsers }) {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const addedImg = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const imageDataURL = reader.result;
      const base64String = imageDataURL.split(",")[1];
      setImage(base64String);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const [uName, setUName] = useState("");
  const [uLName, setULName] = useState("");
  const [uFName, setUFName] = useState("");
  const [uCPass, setUCPass] = useState("");
  const [uPassword, setUPassword] = useState("");

  async function addUser() {
    const newU = {
      name: uName,
      password: uPassword,
      FirstName: uFName,
      LastName: uLName,
      image: image,
    };
    if (!checkIfValid(newU)) {
      return;
    }
    const data = await fetch("http://localhost:12345/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fName: uFName,
        lName: uLName,
        username: uName,
        password: uPassword,
        profileImg: image,
      }),
    });
    navigate("/");
  }

  const checkIfValid = (newU) => {
    let checkPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}/;
    let checkName = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;
    let checkUsername = /^[a-zA-Z0-9_-]{4,16}$/;

    if (
      uName === "" ||
      uPassword === "" ||
      uFName === "" ||
      uLName === "" ||
      uCPass === ""
    ) {
      alert("You must fill all fields!");
      return false;
    }
    if (!uName.match(checkUsername)) {
      alert(
        "Username must be between 4 and 16 characters long\nand contain only:\n-letters\n-numbers\n-underscores\n-hyphens"
      );
      return false;
    }
    if (!uPassword.match(checkPassword)) {
      alert(
        "Password must contain:\n-at least 8 characters\n-uppercase letters\n-lowercase letters\n-numbers"
      );
      return false;
    }
    if (!uLName.match(checkName) || !uFName.match(checkName)) {
      alert("First And Last Names must contain letters only!");
      return false;
    }
    if (image === null) {
      alert("No profile image was uploaded!");
      return false;
    }
    if (newU.password !== uCPass) {
      alert("Passwords do not match!");
      return false;
    }
    return true;
  };

  return (
    <div className="InputBox">
      <form>
        <div className="row g-3">
          <div className="col">
            <InputGetter
              type="text"
              text="First Name"
              onChange={setUFName}
              title="first name must contain only letters"
            />
          </div>
          <div className="col">
            <InputGetter
              type="text"
              text="Last Name"
              onChange={setULName}
              title="last name must contain only letters"
            />
          </div>
        </div>

        <InputGetter
          type="text"
          text="Username"
          onChange={setUName}
          title="must contain at least 8 characters, including uppercase, lowercase letters and numbers"
        />
        <InputGetter
          type="password"
          text="Password"
          onChange={setUPassword}
          title="must contain at least 8 characters, including uppercase, lowercase letters and numbers"
        />
        <InputGetter
          type="password"
          text="Confirm Password"
          onChange={setUCPass}
        />
        <input
          type="file"
          id="picture"
          accept="image/*"
          onChange={addedImg}
          hidden
        />
        <label htmlFor="picture" className="btn btn-danger btn-sm" id="label1">
          Choose a profile picture
        </label>

        {image && (
          <div className="image-container">
            <img src={`data:image/jpeg;base64,${image}`} id="image" alt="" />
          </div>
        )}

        <div className="btn_sign">
          <Btn
            text="Sign Up"
            id="cNewBtn"
            className="fw-bolder btn"
            clicked={addUser}
          />
        </div>
      </form>
      <div className="exist_acc">
        <a href="#" onClick={() => navigate("/")} className="acc">
          Already have an account?
        </a>
      </div>
    </div>
  );
}

export default RegisterBox;
