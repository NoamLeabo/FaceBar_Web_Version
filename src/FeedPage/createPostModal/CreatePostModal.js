import { useRef } from "react";


function CreatePostModal ({addPost}){
    const content = useRef(null);


    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g,"");
      }
    const Postable = function(){
        if(postText.current.value.trim() == ''){
            return false;
        }else {
            return true;
        }
    }
    const postText = useRef(null);
    const search = function(){
        if(Postable()){
            content.current.setAttribute('class', 'btn btn-primary');
        }else{
            content.current.setAttribute('class', 'btn btn-primary disabled');
        }
    }
    const postSetter = function(){
        const post = {
            composer : "Arnon Lutsky",
            time : "now",
            text : postText.current.value,
            contains_img : 0
        }
        addPost(post)
        
    }

    return(
        <div className="modal fade" id="create-post" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Create post</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form>
                    <div className="mb-3">
                    <textarea ref={postText} onKeyUp={search} className="form-control" id="create-post-text" placeholder="What's on your mind, Arnon?"></textarea>
                    </div>
                    <div className="input-group">
                    <input  type="file" className="form-control" aria-label="Upload image or video"></input>
                    </div>
                </form>
                </div>
                <div className="post-button">
                <button type="button" ref={content} className="btn btn-primary disabled btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={postSetter} style={{ marginBottom: '12px' }} >Post</button>
                </div>
            </div>
            </div>
        </div>

    );
}

export default CreatePostModal;