import './Posts.css';
import SettingBtn from "../../CrossScreensElements/btn/SettingsBtn"; 
import ImgBtn from "../../CrossScreensElements/btn/ImgBtn";
import { useRef } from "react";

function TextPost({id, composer, time, text , likesDisp, addLike, img, filterById, remPost}){
      if(id>=10 && img){
      img = URL.createObjectURL(img);
    }
    const likebtn = useRef(null);
    const liked = function(){
      if (likebtn.current.getAttribute('id') == "likeBtn") {
        addLike(1);
      likebtn.current.setAttribute('id', 'likeBtnDis');
      } else {
        addLike(-1);
      likebtn.current.setAttribute('id', 'likeBtn');
      }
  }
    return(
        <div className="card">
          <div className="card-body">
            <SettingBtn btn1action= {remPost} text = {text} composer = {composer} time = {time} id={id} likesDisp = {likesDisp} img = {img}/>
            <h5 className="card-title">{composer}</h5>
            <p className="card-text">
              <small className="text-body-secondary">Last updated {time}</small>
            </p>
            <p className="card-text">
              {text}
            </p>
            <hr style={{ margin: "10px 0" }} />

            {img && (
                <div className="d-flex justify-content-center">
                  <img
                    alt="not found"
                    width={"50%"}
                    src={img}
                  />
                </div>
              )} 
          </div>
          <div className="card-footer">
                <p class="d-flex justify-content-around">
                  <div className="row g-3">
                    <div className='col'>
                <button ref={likebtn} type="button" class="btn reg-btn" data-bs-toggle="button" onClick={liked} id="likeBtn">
                    <i class="bi bi-hand-thumbs-up"></i>
                    <span class="position-relative fixed-top top-6 start-100 translate-middle badge rounded-pill bg-danger">
                      {likesDisp}
                    </span>
                </button>
                </div>
                <div className='col'>
                  <ImgBtn target={"#opened-post-" + id} toggle= {"modal"} img = {"bi bi-chat"}/>
                  </div>
                  <div className='col'>
                  <ImgBtn target={"#opened-post-" + id} toggle= {"modal"} img = {"bi bi-send"}/>
                  </div>
                </div>
                </p>
            </div>
          </div>
    );
}
// `opened-post-${id}`
export default TextPost;