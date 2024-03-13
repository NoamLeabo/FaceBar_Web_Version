import "./Posts.css";
import PostSettingBtn from "../../CrossScreensElements/btn/PostSettingBtn";
import ImgBtn from "../../CrossScreensElements/btn/ImgBtn";
import { useEffect, useRef, useState } from "react";

function TextPost({
  id,
  composer,
  profilePic,
  time,
  text,
  likesDisp,
  addLike,
  img,
  usersWhoLiked,
  filterById,
  remPost,
  inModal,
  Uname,
}) {
  const [iLiked, setILiked] = useState(usersWhoLiked.includes(Uname));
  const [clickedLike, setClikedLike] = useState(false);
  const [profPic, setProfPic] = useState(composer.profileImg);

  let containerSize = null;

  if (img) {
    let imgHeight = img.height + 50;
    containerSize = { height: { imgHeight } };
  }
  const likebtn = useRef(null);
  const liked = function () {
    if (!iLiked) {
      addLike(1);
      setClikedLike(true);
      likePost();
      likebtn.current.setAttribute("id", "likeBtnDis");
    } else {
      setClikedLike(false);
      likePost();
      addLike(-1);
      likebtn.current.setAttribute("id", "likeBtn");
    }
  };
  useEffect(() => {
    if (usersWhoLiked.length) {
      if (usersWhoLiked.includes(Uname)) {
        setILiked(true);
        likebtn.current.setAttribute("id", "likeBtnDis");
      }
    }
  }, [clickedLike]);
  async function likePost() {
    const data = await fetch(
      "http://localhost:12345/api/users/" + Uname + "/posts/" + id,
      {
        method: "POST",
        // Remove the Content-Type header
        // headers: {
        //   "Content-Type": "application/json",
        //   authorization: "bearer " + gotToken,
        // },
      }
    );
  }
  // console.log(profilePic);
  // console.log("profile pic");
  return (
    <div className="card">
      <div className="card-body ">
        <PostSettingBtn btn1action={remPost} id={id} inModal={inModal} />
        <h5 className="card-title">
          <img
            src={`data:image/jpeg;base64,${profPic}`}
            className="ProfPic rounded-circle img-cover ratio ratio-1x1 overflow-hidden"
            width={"100px"}
            alt=""
          />
          {composer.fName} {composer.lName}
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
                // src={img}
                src={`data:image/jpeg;base64,${img}`}
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
