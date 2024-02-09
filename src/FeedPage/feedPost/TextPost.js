import './Posts.css';
import ImgBtn from "../../CrossScreensElements/btn/ImgBtn";
import { useRef } from "react";

function TextPost({id, composer, time, text , likesDisp, addLike, img, filterById}){
    if(id>=10 && img){
      img = URL.createObjectURL(img);
    }
    const likebtn = useRef(null);
    const liked = function(){
      addLike();
      likebtn.current.setAttribute('class', 'btn reg-btn disabled');
      likebtn.current.setAttribute('id', 'likeBtnDis');

  }
    return(
        <div className="card">
          <div className="card-body">
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
                    width={"90%"}
                    src={img}
                  />
                </div>
              )} 
          </div>
          <div className="card-footer">
                <p class="d-flex justify-content-around">
                <button ref={likebtn} type="button" class="btn reg-btn" data-bs-toggle="button" onClick={liked} id="likeBtn">
                    <i class="bi bi-hand-thumbs-up"></i>
                    <span class="position-relative top-1 start-100 translate-middle badge rounded-pill bg-danger">
                      {likesDisp}
                    </span>
                </button>
                  <ImgBtn target={"#opened-post-" + id} toggle= {"modal"} img = {"bi bi-chat"}/>
                  <ImgBtn target={"#opened-post-" + id} toggle= {"modal"} img = {"bi bi-send"}/>
                </p>
            </div>
          </div>
    );
}
// `opened-post-${id}`
export default TextPost;