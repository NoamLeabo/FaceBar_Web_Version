import SideBarBtn from './SideBarBtn';
import btns from './btns';
function SideBar(){
    const btnList = btns.map((button, key ) =>{
        return <SideBarBtn {...button} key={key}/>
      });
    return(
        <div className="list-group" id="side-bar" style={{marginTop:"20px"}}>
        {/* <!-- <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
          The current link item
        </a> --> */}
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
          {/* <!-- <a href="#" className=" list-group-item-action ">
              See more</a> --> */}
          </li>
        {/* <!-- <a className="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</a> --> */}
      </div>
    );
}
export default SideBar;