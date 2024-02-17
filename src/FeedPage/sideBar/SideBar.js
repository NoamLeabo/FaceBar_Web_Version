import SideBarBtn from "./SideBarBtn";
import btns from "./btns";
import { useRef } from "react";
import "./SideBar.css";
function SideBar({ loggedinUser }) {
  const btnList = btns.map((button, key) => {
    return <SideBarBtn {...button} key={key} />;
  });
  return (
    <div className="list-group" id="side-bar" style={{ marginTop: "20px" }}>
      {btnList}
      <li className="list-group-item">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            See more
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item" type="button">
                Not Available Yet...
              </button>
            </li>
          </ul>
        </div>
      </li>
    </div>
  );
}
export default SideBar;
