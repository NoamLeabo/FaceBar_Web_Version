import './FeedPage.css';
import FeedPost from '../feedPost/FeedPost';
import posts from '../feedPost/posts';
import NavBar from '../navBar/NavBar';
import CreatePostModal from '../createPostModal/CreatePostModal';
import SideBar from '../sideBar/SideBar';
import { useState } from 'react';
import ContentNotAvailable from '../contentNotAvailable/ContentNotAvailable';
import { useRef } from 'react';
import { Navigate } from 'react-router-dom';

function FeedPage({loggedinUser}) {
  const page = useRef(null);
  const [postList, setPostList] = useState(posts)

  if(!loggedinUser){
    return <Navigate to="/" />;
  }
  function filterById(jsonObject, id) {return jsonObject.filter(function(jsonObject) {return (jsonObject['id'] == id);})[0];}

  const setDarkMode = function(mode){
    page.current.className = mode;
  }

  const addPost = (post) =>{
       
    setPostList([post, ...postList])
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
  
  function remComment (postId, commentId){
    var index = -1;
    postList.find(function(item, i){
      if(item.id === postId){
        index = i;
        return i;
      }
    });

  const comments = postList[index].comments;
  index = -1;
  comments.find(function(item, i){
    if(item.commentId === commentId){
      index = i;
      return i;
    }
  });
  comments.splice(index,1);
  postList[index].comments = comments;
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

  function editComment (postId, commentId, newItem){
    var index = -1;
    postList.find(function(item, i){
      if(item.id === postId){
        index = i;
        return i;
      }
    });

  const comments = postList[index].comments;
  index = -1;
  comments.find(function(item, i){
    if(item.commentId === commentId){
      index = i;
      return i;
    }
  });

  comments.splice(index,1,newItem);
  postList[index].comments = comments;
  setPostList([...postList]);
  };

  
  const postListElement = postList.map((post ) =>{
    return <FeedPost {...post}
     remPost={remPost}
     editPost={editPost}
     remComment = {remComment} 
     editComment = {editComment} 
     key={post.id} 
     Uname = {loggedinUser.name}/>
  });
  console.log("logged in is" + loggedinUser.name)
  return (
    <div ref={page} className="container-fluid">
      <NavBar/>
      <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-2">
              <SideBar setDarkMode= {setDarkMode} loggedinUser ={loggedinUser}/>
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
            <CreatePostModal addPost = {addPost} postNum = {postList.length} composer = {loggedinUser.name}/>
            {/* <!-- Posts --> */}
            {postListElement}
            <ContentNotAvailable />
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-2">
              
          </div>
      </div>
  </div>
  );

}

export default FeedPage