import EditPostModal from "../../FeedPage/editPostModal/EditPostModal";
import "./Btn.css";
function CommSettingsBtn({ remComment, commentId, postId, setCommentList }) {
  return (
    <div className="btn-group settings-btn">
      <button
        type="button"
        className="btn btn-outline-secondary settings-btn"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-three-dots"></i>
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => remComment(postId, commentId, setCommentList)}
          >
            Delet comment
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            data-bs-toggle="modal"
            data-bs-target={"#edit-comment-" + postId + "-" + commentId}
          >
            Edit comment
          </button>
        </li>
      </ul>
    </div>
  );
}
export default CommSettingsBtn;
