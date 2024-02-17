import "./Posts.css";
import PostSettingBtn from "../../CrossScreensElements/btn/PostSettingBtn";
import ImgBtn from "../../CrossScreensElements/btn/ImgBtn";
import { useRef } from "react";

function TextPost({
  id,
  composer,
  time,
  text,
  likesDisp,
  addLike,
  img,
  filterById,
  remPost,
  inModal,
}) {
  let containerSize = null;
  if (img) {
    let imgHeight = img.height + 50;
    containerSize = { height: { imgHeight } };
  }
  const likebtn = useRef(null);
  const liked = function () {
    if (likebtn.current.getAttribute("id") == "likeBtn") {
      addLike(1);
      likebtn.current.setAttribute("id", "likeBtnDis");
    } else {
      addLike(-1);
      likebtn.current.setAttribute("id", "likeBtn");
    }
  };
  return (
    <div className="card">
      <div className="card-body ">
        <PostSettingBtn
          btn1action={remPost}
          text={text}
          composer={composer}
          time={time}
          id={id}
          likesDisp={likesDisp}
          img={img}
          inModal={inModal}
        />
        <h5 className="card-title">
          <img
            src={composer.image}
            className="ProfPic rounded-circle img-cover ratio ratio-1x1 overflow-hidden"
            width={"100px"}
            alt=""
          />
          {composer.FirstName} {composer.LastName}
        </h5>
        <p className="card-text">
          <small className="text-body-secondary">Last updated {time}</small>
        </p>
        <p className="card-text">{text}</p>
        <hr style={{ margin: "10px 0" }} />
        <div className="container" style={containerSize}>
          {img && (
            <div className="d-flex justify-content-center">
              <img
                alt="not found"
                style={{
                  maxHeight: "350px",
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                }}
                src={img}
              />
            </div>
          )}
        </div>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-around">
          <div className="row g-3">
            <div className="col">
              <button
                ref={likebtn}
                type="button"
                className="btn reg-btn"
                data-bs-toggle="button"
                onClick={liked}
                data-testid={`likeBtn-test-${id}`}
                id="likeBtn"
              >
                <i className="bi bi-hand-thumbs-up"></i>
                <span className="position-relative fixed-top top-6 start-100 translate-middle badge rounded-pill bg-danger">
                  {likesDisp}
                </span>
              </button>
            </div>
            <div className="col">
              <ImgBtn
                target={"#opened-post-" + id}
                toggle={"modal"}
                img={"bi bi-chat"}
              />
            </div>
            <div className="col">
              <ImgBtn
                target="#share-post-modal"
                toggle={"modal"}
                img={"bi bi-send"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TextPost;
