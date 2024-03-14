import Search from "../search/Search";
import "./NavBar.css";
import { Navigate, useNavigate } from "react-router-dom";
import DarkModeBtn from "../../CrossScreensElements/btn/DarkModeBtn";
import EditUserModal from "../../CrossScreensElements/modals/EditUserModal/EditUserModal";

function NavBar({
  loggedinUser,
  setLoggedinUser,
  setDarkMode,
  setProfileOwner,
  reloader,
  setReloader,
  gotToken,
}) {
  const navigate = useNavigate();

  const logOut = () => {
    setLoggedinUser(null);
    return <Navigate to="/" />;
  };
  const profPage = () => {
    setProfileOwner(loggedinUser);
    var myProffPage = "/users/" + loggedinUser.username;
    navigate(myProffPage);
  };
  const navHome = () => {
    navigate("/home");
  };
  const navallUsers = () => {
    navigate("/allUsers");
  };
  const editUser = () => {};
  return (
    <nav
      className="navbar navbar-expand-md bg-body-tertiary fixed-top nav-justified justify-content-between navbar-light bg-light"
      id="navbar"
    >
      <EditUserModal
        loggedinUser={loggedinUser}
        logOut={logOut}
        setReloader={setReloader}
        reloader={reloader}
        gotToken={gotToken}
      />
      <div className="container-fluid" id="navbarcontainer">
        <a className="navbar-brand" href="#">
          <i
            className="bi bi-facebook fa-7x text-primary"
            id="faceboockimg"
          ></i>
        </a>
        <Search />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <li className="nav-item nav-icon" style={{ padding: "10px" }}>
            <a
              className="nav-link active"
              aria-current="page"
              onClick={navHome}
            >
              <i className="bi bi-house-door"></i>
            </a>
          </li>
          <li className="nav-item nav-icon">
            <a
              className="nav-link active"
              aria-current="page"
              onClick={navallUsers}
            >
              <i className="bi bi-people-fill"></i>
            </a>
          </li>
          <li className="nav-item nav-icon">
            <a className="nav-link active" aria-current="page" href="#">
              <i className="bi bi-shop-window"></i>
            </a>
          </li>
          <li className="nav-item nav-icon">
            <a className="nav-link active" aria-current="page" href="#">
              <i className="bi bi-person-lines-fill"></i>
            </a>
          </li>
          <DarkModeBtn setDarkMode={setDarkMode} />
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarProfileDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {loggedinUser.fName} {loggedinUser.lName}
                <img
                  src={`data:image/jpeg;base64,${loggedinUser.profileImg}`}
                  className="ProfPic rounded-circle img-cover ratio ratio-1x1 overflow-hidden"
                  width={"100px"}
                  alt=""
                />
              </a>
              <div
                className="dropdown-menu dropdown-menu-end animate slideIn"
                aria-labelledby="navbarDropdown"
              >
                <a className="dropdown-item" role="button" onClick={profPage}>
                  Profile page
                </a>
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#editUserModal"
                  className="dropdown-item"
                  role="button"
                  onClick={editUser}
                >
                  Edit user
                </a>
                <a className="dropdown-item" role="button" onClick={logOut}>
                  Log out
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
