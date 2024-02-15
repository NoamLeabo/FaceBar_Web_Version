import { useRef } from "react";

function EditComment({ editComments, originalCommentText, commentId, postId, commentAuthor, setCommentList}) {
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
            content.current.className = 'btn btn-primary';
        } else {
            content.current.className = 'btn btn-primary disabled';
        }
    };

    const commSetter = function() {
        const comment = {
            commentAuthor: commentAuthor,
            commentText: commText.current.value,
        };
        editComments(postId, commentId, comment, setCommentList);
    };

    return (
        <div className="modal fade" id={`edit-comment-${postId}-${commentId}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit comment</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <textarea ref={commText} onKeyUp={search} className="form-control" id="create-comment-text" defaultValue={originalCommentText}></textarea>
                            </div>
                        </form>
                        <div className="d-flex flex-row-reverse">
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button ref={content} className="btn btn-primary disabled"  data-bs-dismiss="modal" onClick={commSetter}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditComment;
