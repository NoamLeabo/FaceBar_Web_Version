import { useRef } from "react";

// function Search({doSearch}){
function Search(){

    // const searchBox = useRef(null)
    // const search = function(){
    //     doSearch(searchBox.current.value)
    // }
    return(
        <form className="d-flex" role="search">
            {/* <input ref={searchBox} onKeyUp={search} className="form-control me-2" type="search" placeholder="Search FaceBar" aria-label="Search FaceBar"></input> */}
            <input className="form-control me-2" type="search" placeholder="Search FaceBar" aria-label="Search FaceBar"></input>
        </form>
    );
}

export default Search;