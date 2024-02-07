import FeedPostModal from "./FeedPostModal";

function FeedPost({composer, time, text, contains_img, img}){
  if(contains_img){
    return(
            <div className="feed-component">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{composer}</h5>
                  <p className="card-text">
                    <small className="text-body-secondary">Last updated {time} ago</small>
                  </p>
                  <p className="card-text">
                    {text}
                  </p>
                </div>
                <svg
                  className="bd-placeholder-img card-img-bottom"
                  width="100%"
                  height="180"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Image cap"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
                </svg>
                <div className="card-footer">
                    <p class="d-inline-flex gap-1">
                        <button type="button" class="btn reg-btn" data-bs-toggle="button">
                            <i class="bi bi-hand-thumbs-up"></i>
                        </button>
                        <button type="button" class="btn active reg-btn" data-bs-toggle="modal" data-bs-target="#opened-post" >
                            <i class="bi bi-chat"></i>
                        </button>
                        <button type="button" class="btn active reg-btn" data-bs-toggle="modal" data-bs-target="#opened-post" >
                            <i class="bi bi-send"></i>
                        </button>
                    </p>
                </div>
              </div>
              <FeedPostModal composer = {composer} time ={time}  text ={text}/>
            </div>

    );
  }
  else{
    return(
      <div className="feed-component">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{composer}</h5>
            <p className="card-text">
              <small className="text-body-secondary">Last updated {time} ago</small>
            </p>
            <p className="card-text">
              {text}
            </p>
          </div>
          <div className="card-footer">
                <p class="d-inline-flex gap-1">
                    <button type="button" class="btn reg-btn" data-bs-toggle="button">
                        <i class="bi bi-hand-thumbs-up"></i>
                    </button>
                    <button type="button" class="btn active reg-btn" data-bs-toggle="modal" data-bs-target="#opened-post" >
                        <i class="bi bi-chat"></i>
                    </button>
                    <button type="button" class="btn active reg-btn" data-bs-toggle="modal" data-bs-target="#opened-post" >
                        <i class="bi bi-send"></i>
                    </button>
                </p>
            </div>
          </div>
        <FeedPostModal composer = {composer} time ={time}  text ={text}/>
      </div>
    );
  }
}
export default FeedPost;