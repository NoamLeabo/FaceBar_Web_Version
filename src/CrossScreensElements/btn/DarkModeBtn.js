import "./DarkModeBtn.css";

import { useRef } from "react";
function DarkModeBtn({ setDarkMode }) {
  const darkModeBtn = useRef(null);
  const darkMode = function () {
    if (darkModeBtn.current.checked) {
      setDarkMode("container-fluid dark-mode");
      document.body.style.backgroundColor = "rgb(82 82 82)";
    } else {
      setDarkMode("container-fluid");
      document.body.style.backgroundColor = "#e9ecef";
    }
  };
  return (
    <label className="switch">
      <input ref={darkModeBtn} onChange={darkMode} type="checkbox"></input>
      <span className="slider round"></span>
    </label>
  );
}
export default DarkModeBtn;
