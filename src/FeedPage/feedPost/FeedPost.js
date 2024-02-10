import ImgBtn from "../../CrossScreensElements/btn/ImgBtn";
import FeedPostModal from "./FeedPostModal";
import EditPostModal from "../editPostModal/EditPostModal";
import TextPost from "./TextPost";
import { useState } from "react";
function FeedPost({id, composer, time, text,comments, img, likes, remPost, editPost}){
  function filterById(jsonObject, id) {return jsonObject.filter(function(jsonObject) {return (jsonObject['id'] == id);})[0];}


  let likesDisp;
  const [likenum, setLikes] = useState(likes);
  if(likenum>999){
    likesDisp = "999+";
  }else{
    likesDisp = likenum;
  }
  const addLike = function (stat){
    console.log(likenum);
    setLikes(l => l + stat);
    console.log(likenum);
    if(likenum>999){
      likesDisp = "999+";
    }else{
      likesDisp = likenum;
    } 
  }
    return(
      <div className="feed-component">
      <TextPost id = {id} composer = {composer} time ={time}  text ={text} likesDisp = {likesDisp} addLike = {addLike} filterById = {filterById} img = {img} remPost={remPost}/>
      <FeedPostModal id = {id} composer = {composer} time ={time}  text ={text} comments = {comments} likesDisp = {likesDisp} addLike = {addLike} filterById = {filterById} img = {img}/>
      <EditPostModal editPost ={editPost} myId = {id} myText ={text} myComposer = {composer} myTime={time} myLikes = {likesDisp} myImg ={img} myComments = {comments} />
    </div>
    );
}


export default FeedPost;

