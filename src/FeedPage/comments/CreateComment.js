import { useRef } from "react";
function CreateComment({ addComment, commId, Uname, editComments }) {
  const content = useRef(null);

  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
  };
  const Postable = function () {
    if (commText.current.value.trim() == "") {
      return false;
    } else {
      return true;
    }
  };
  const commText = useRef(null);
  const search = function () {
    if (Postable()) {
      content.current.className =
        "btn btn-outline-primary postable-comment post-comment-class";
    } else {
      content.current.className =
        "btn btn-outline-secondary disabled post-comment-class";
    }
  };
  const commSetter = function () {
    const comment = {
      commentAuthor: Uname,
      commentText: commText.current.value,
      commentId: commId,
    };
    addComment(comment);
    commText.current.value = "";
    content.current.className = "btn btn-outline-secondary disabled";
  };
  return (
    <>
      <form>
        <div className="mb-3 create-comment-class">
          <textarea
            ref={commText}
            onKeyUp={search}
            className="form-control"
            id="create-comment-text"
          ></textarea>
        </div>
      </form>
      <div className="d-flex flex-row-reverse">
        <button
          ref={content}
          className="btn btn-outline-secondary disabled post-comment-class"
          onClick={commSetter}
          style={{ marginBottom: "12px" }}
        >
          <i className="bi bi-send-fill" fill="currentColor"></i>
        </button>
      </div>
    </>
  );
}
export default CreateComment;
