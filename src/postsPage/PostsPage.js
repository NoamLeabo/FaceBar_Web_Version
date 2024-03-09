import "../FeedPage/feedPage/FeedPage.css";
import FeedPost from "../FeedPage/feedPost/FeedPost";
import posts from "../FeedPage/feedPost/posts";
import NavBar from "../FeedPage/navBar/NavBar";
import CreatePostModal from "../FeedPage/createPostModal/CreatePostModal";
import SideBar from "../FeedPage/sideBar/SideBar";
import { useState } from "react";
import ContentNotAvailable from "../FeedPage/contentNotAvailable/ContentNotAvailable";
import { useRef, useEffect } from "react";
import { Navigate } from "react-router-dom";
// import Contact from "../contact/Contact";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import CreatePostButton from "../FeedPage/createPostButton/CreatePostButton";
function PostsPage() {
  const page = useRef(null);
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    async function getAll() {
      const data = await fetch("http://localhost:12345/posts");
      posts = await data.json();
      console.log(posts);
    }
    setPostList(getAll());
  });

  function filterById(jsonObject, id) {
    return jsonObject.filter(function (jsonObject) {
      return jsonObject["id"] == id;
    })[0];
  }

  const setDarkMode = function (mode) {
    page.current.className = mode;
  };
  let postNum = 1;

  const postListElement = postList.map((post) => {
    return (
      <FeedPost {...post} key={post.id} commentsNum={post.comments.length} />
    );
  });
  //   const contactList = activeUsers.map((user, key) => {
  //     return <Contact user={user} key={key} />;
  //   });
  return (
    <div ref={page} className="container-fluid">
      <NavBar setDarkMode={setDarkMode} />
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-2">
        </div>
        <div
          className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-6"
          id="feedmain"
        >


          {postListElement}
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-2 ps-5">
          <div
            className="list-group"
            id="side-bar"
            style={{ marginTop: "20px", paddingBottom: "100px", right: "0" }}
          >

          </div>
        </div>
      </div>
    </div>
  );
}
export default PostsPage;
