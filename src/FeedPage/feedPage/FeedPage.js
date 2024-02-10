import './FeedPage.css';
import FeedPost from '../feedPost/FeedPost';
import posts from '../feedPost/posts';
import NavBar from '../navBar/NavBar';
import CreatePostModal from '../createPostModal/CreatePostModal';
import SideBar from '../sideBar/SideBar';
import { useState } from 'react';

function FeedPage() {
  function filterById(jsonObject, id) {return jsonObject.filter(function(jsonObject) {return (jsonObject['id'] == id);})[0];}

  const [postList, setPostList] = useState(posts)
  const addPost = (post) =>{
       
    setPostList([...postList, post])
  }
  function remPost (id){
    var index = -1;
    postList.find(function(item, i){
      if(item.id === id){
        index = i;
        return i;
      }
    });
    
    postList.splice(index,1);
    setPostList([...postList]);
  };
  function editPost (id, newItem){
    var index = -1;
    postList.find(function(item, i){
      if(item.id === id){
        index = i;
        return i;
      }
    });
    
    postList.splice(index,1, newItem);
    setPostList([...postList]);
  };
  const postListElement = postList.map((post ) =>{
    return <FeedPost {...post} remPost={remPost} editPost={editPost} key={post.id}/>
  });
  return (
    <div className="container-fluid">
      <NavBar/>
      <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-2">
              <SideBar/>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6" id="feedmain">
            <div className="card">
              <div className="card-body">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#create-post" id="create-post-btn">
              What's on your mind, Arnon?
            </button>
          </div>
          </div>
            {/* <!-- Modal for creating a post--> */}
            <CreatePostModal addPost = {addPost}/>
            {/* <!-- Posts --> */}
            {postListElement}
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-2">
              
          </div>
      </div>
  </div>
  );

}

export default FeedPage