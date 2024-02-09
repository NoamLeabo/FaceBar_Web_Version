import ImgBtn from "../../CrossScreensElements/btn/ImgBtn";
import FeedPostModal from "./FeedPostModal";
import TextPost from "./TextPost";
import { useState } from "react";
function FeedPost({id, composer, time, text,comments, contains_img, img, likes}){
  function filterById(jsonObject, id) {return jsonObject.filter(function(jsonObject) {return (jsonObject['id'] == id);})[0];}


  let likesDisp;
  const [likenum, setLikes] = useState(likes);
  if(likenum>99){
    likesDisp = "99+";
  }else{
    likesDisp = likenum;
  }
  const addLike = function (){
    console.log(likenum);
    setLikes(l => l + 1);
    console.log(likenum);
    if(likenum>99){
      likesDisp = "99+";
    }else{
      likesDisp = likenum;
    }
  }
    return(
      <div className="feed-component">
      <TextPost id = {id} composer = {composer} time ={time}  text ={text} likesDisp = {likesDisp} addLike = {addLike} filterById = {filterById} img = {img}/>
      <FeedPostModal id = {id} composer = {composer} time ={time}  text ={text} comments = {comments} likesDisp = {likesDisp} addLike = {addLike} filterById = {filterById} img = {img}/>
    </div>
    );
}


export default FeedPost;

