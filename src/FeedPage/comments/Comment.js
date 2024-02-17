import CommSettingsBtn from "../../CrossScreensElements/btn/CommSettingsBtn";
import EdditComment from "./EditComment";
import "./Comments.css";
function Comment({
  commentId,
  commentText,
  commentAuthor,
  remComment,
  postId,
  editComment,
  setCommentList,
}) {
  const edditing = 0;

  return (
    <figure className="comments-class">
      <CommSettingsBtn
        remComment={remComment}
        postId={postId}
        commentId={commentId}
        setCommentList={setCommentList}
      />
      <figcaption className="blockquote-footer">
        <cite title="Source Title">{commentAuthor}</cite>
      </figcaption>
      <blockquote className="blockquote">
        <p className="comm-text">{commentText}</p>
      </blockquote>
    </figure>
  );
}
export default Comment;
