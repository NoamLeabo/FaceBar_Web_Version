import { useRef } from "react";
import UploadAndDisplayImage from "../uploadAndDisplayImage/UploadAndDisplayImage";
import { useState } from "react";
import { useEffect } from "react";

function EditPostModal ({editPost, myId, myText, myComposer, myTime, myLikes, myImg, myComments}){
    const [selectedImage, setSelectedImage] = useState(null);
    useEffect(() => {
        if (myImg != null && myId > 9) {
          setSelectedImage(myImg);
        }
      }, []);
    const addedImg = (event) =>{
        setSelectedImage(event.target.files[0]);
    }
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
            content.current.className ='btn btn-primary';
        }else{
            content.current.className = 'btn btn-primary disabled';
        }
        
    }
    if(myComments == null){
        myComments = [];
    }
    if(myLikes == null){
        myLikes = 0;
    }
    if(myTime == null){
        myTime = "now";
    }
    if(myComposer == null){
        myComposer = "Arnon Lutsky";
    }
    const postSetter = function(){
        console.log(selectedImage);
        const post = {
            id : myId,
            composer : myComposer,
            time : myTime,
            text : postText.current.value,
            img : selectedImage,
            likes : myLikes,
            comments : myComments
        }
        editPost(myId, post)
        postText.current.value = "";
    }

    return(
        <div className="modal fade" id={`edit-post-${myId}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Create post</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form>
                    <div className="mb-3">
                    <textarea ref={postText} onKeyUp={search} className="form-control" id="create-post-text" defaultValue={myText}></textarea>
                    </div>
                    <div className="input-group">
                    {/* <input  type="file" className="form-control" aria-label="Upload image or video"></input> */}
                    <UploadAndDisplayImage addedImg = {addedImg} selectedImage = {selectedImage} setSelectedImage={setSelectedImage} myImg = {myImg}/>
                    </div>
                </form>
                </div>
                <div className="textAlignC">
                <button type="button" ref={content} className="btn btn-primary disabled" data-bs-dismiss="modal" aria-label="Close" onClick={postSetter} style={{ marginBottom: '12px' }} >Post</button>
                </div>
            </div>
            </div>
        </div>

    );

}
export default EditPostModal;
