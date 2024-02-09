import Search from "../search/Search";

function NavBar(){

    // const [postList, setPostList] = useState('');
    // const doSearch = function(q){
    //     setPostList(posts.filter((post)=> post.text.includes(q)));
    //   }

    return(      
    <nav className="navbar bg-body-tertiary fixed-top nav-justified" id="navbar">
        <div className="container-fluid" id="navbarcontainer">
        <a className="navbar-brand" href="#">
            <i className="bi bi-facebook fa-7x text-primary" id="faceboockimg"></i>
        </a>
        {/* <Search doSearch = {doSearch}/> */}
        <Search/>
        {/* <!-- <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button> -->
        <!-- <div className="collapse navbar-collapse" id="navbarSupportedContent"> --> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <div className="d-flex justify-content-center">
                <li className="nav-item nav-icon">
                <a className="nav-link active" aria-current="page" href="#">
                    <i className="bi bi-house-door"></i>
                </a>
                </li>
                <li className="nav-item nav-icon">
                <a className="nav-link active" aria-current="page" href="#">
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
            {/* <!-- <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
                </a>
                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li> --> */}
            </div>
            </ul>
        </div>
    </nav>
);
}

export default NavBar;