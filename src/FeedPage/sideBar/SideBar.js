import SideBarBtn from './SideBarBtn';
import btns from './btns';
import { useRef } from 'react';
import "./SideBar.css"
function SideBar({setDarkMode, loggedinUser}){
    const darkModeBtn = useRef(null);
    const darkMode = function(){
      if(darkModeBtn.current.checked){
        setDarkMode('container-fluid');
        document.body.style.backgroundColor = "rgb(231, 214, 214)";

        
      }else{
        setDarkMode('container-fluid dark-mode');
        document.body.style.backgroundColor = "rgb(82 82 82)";
      }
    }
    const btnList = btns.map((button, key ) =>{
        return <SideBarBtn {...button} key={key}/>
      });
    return(
        <div className="list-group" id="side-bar" style={{marginTop:"20px"}}>
        <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
          {loggedinUser.name}
        </a>
        <label className="switch">
          <input ref={darkModeBtn} onChange={darkMode} type="checkbox"></input>
          <span className="slider round"></span>
        </label>
        {btnList}
        <li className="list-group-item">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              See more
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" type="button">Not Available Yet...</button></li>
            </ul>
          </div>

          </li>
      </div>
    );
}
export default SideBar;