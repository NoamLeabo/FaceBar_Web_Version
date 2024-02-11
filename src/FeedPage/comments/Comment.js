import CommSettingsBtn from "../../CrossScreensElements/btn/CommSettingsBtn";
import EdditComment from "./EditComment";
function Comment({commentId, commentText ,commentAuthor ,remComment, postId, editComment}){
  const edditing = 0;
  const editThisComment =()=> {

  }

    return(
        <figure className="comments-class">
          <CommSettingsBtn editThisComment={editThisComment} remComment= {remComment} postId= {postId} commentId={commentId}/>
        <figcaption className="blockquote-footer">
           <cite title="Source Title">{commentAuthor}</cite>
        </figcaption>
        <blockquote className="blockquote">
          <p>{commentText}</p>
        </blockquote>
        {/* <EdditComment editComment={editComment}
        originalCommentText={commentText}
        commentId={commentId}
        postId ={postId}/>  */}
      </figure>
    );

}
export default Comment;