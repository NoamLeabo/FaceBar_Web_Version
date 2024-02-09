function ImgPost({id, composer, time, text , likesDisp, addLike, img}){

    return(
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
        </svg>
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

export default ImgPost;