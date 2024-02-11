import FeedPost from "./FeedPost";
import TextPost from "./TextPost";
import { useState } from 'react';
import Comment from "../comments/Comment";
import CreateComment from "../comments/CreateComment";
function FeedPostModal({id, composer, time, text, comments, likesDisp, addLike, remComment, editComment, commentList, setCommentList, Uname}){
    const addComment = (comment) =>{
         
        setCommentList([...commentList, comment])
    }
    const commentListElement = commentList.map((comment, key ) =>{
      return <Comment {...comment} key={key} remComment={remComment} editComment = {editComment} postId = {id}/>
    });
    return(
        <div className="modal fade" id={`opened-post-${id}`} tabIndex="-1" aria-labelledby="opendPostLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                </div>
                <div className="modal-body">
                    <TextPost id = {id} composer = {composer} time ={time}  text ={text} likesDisp = {likesDisp} addLike = {addLike}/>
                </div>
                {commentListElement}
                <CreateComment addComment = {addComment} commId = {commentListElement.length} Uname = {Uname} />
            </div>
            </div>
        </div>
    );
}

export default FeedPostModal;