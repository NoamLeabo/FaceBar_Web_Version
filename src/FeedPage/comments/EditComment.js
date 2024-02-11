import { useRef } from "react";

function EditComment({ editComment, originalCommentText, commentId, postId }) {
    const content = useRef(null);

    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "");
    };

    const Postable = function() {
        if (commText.current.value.trim() === '') {
            return false;
        } else {
            return true;
        }
    };

    const commText = useRef(null);

    const search = function() {
        if (Postable()) {
            content.current.setAttribute('class', 'btn btn-primary');
        } else {
            content.current.setAttribute('class', 'btn btn-primary disabled');
        }
    };

    const commSetter = function() {
        const comment = {
            commentAuthor: "Arnon Lutsky",
            commentText: commText.current.value,
        };
        editComment(postId, commentId, comment);
        commText.current.value = "";
    };

    return (
        <div className="modal fade" id={`edit-comment-${postId}-${commentId}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <textarea ref={commText} onKeyUp={search} className="form-control" id="create-comment-text" defaultValue={originalCommentText}></textarea>
                            </div>
                        </form>
                        <div className="d-flex flex-row-reverse">
                            <button style={{ marginBottom: '12px' }}>
                                <i className="bi bi-send-fill" fill="currentColor"></i>
                            </button>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button ref={content} className="btn btn-primary disabled" onClick={commSetter}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditComment;
