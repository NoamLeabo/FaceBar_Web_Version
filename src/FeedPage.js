import './App.css';
import FeedPost from './FeedPage/feedPost/FeedPost';
import posts from './FeedPage/feedPost/posts';
import NavBar from './navBar/NavBar';
import CreatePostModal from './FeedPage/createPostModal/CreatePostModal';
import SideBar from './FeedPage/sideBar/SideBar';
import { useState } from 'react';

function FeedPage() {
       
  const [postList, setPostList] = useState(posts)
  const addPost = (post) =>{
       
    setPostList([...postList, post])
  }
  const postListElement = postList.map((post, key ) =>{
    return <FeedPost {...post} key={key}/>
  });
  return (
    <div className="container-fluid">
      <NavBar/>
      <div className="row">
          <div className="col-3">
              <SideBar/>
          </div>
          <div className="col-6" id="feedmain">
            {/* <!-- Button trigger modal --> */}
          <div className="feed-component">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#create-post" id="create-post-btn">
              What's on your mind, Arnon?
            </button>
          </div>
            {/* <!-- Modal --> */}
            <CreatePostModal addPost = {addPost}/>
            {/* <!-- Post with image --> */}
            {postListElement}
            {/* <!-- Post with only text --> */}
          </div>
          <div className="col-3">
              cont
          </div>
      </div>
  </div>
  );

}

export default FeedPage