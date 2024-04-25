import { useRef } from "react";
import UploadAndDisplayImage from "../../CrossScreensElements/modals/uploadAndDisplayImage/UploadAndDisplayImage";
import { useState } from "react";
import { useEffect } from "react";
import PostAlert from "../../CrossScreensElements/alerts/PostAlert/PostAlert";

function EditPostModal({
  editPost,
  myId,
  myText,
  myComposer,
  myTime,
  myLikes,
  myImg,
  myComments,
  gotToken,
}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [shouldHide, setShouldHide] = useState(false);

  useEffect(() => {
    if (myImg != null) {
      setSelectedImage(myImg);
    }
    search();
  }, []);
  const addedImg = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const imageDataURL = reader.result;
      const base64String = imageDataURL.split(",")[1];
      setSelectedImage(base64String);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const content = useRef(null);
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
  };
  const Postable = function () {
    if (postText.current.value.trim() == "") {
      return false;
    } else {
      return true;
    }
  };
  const postText = useRef(null);
  const closeModal = useRef(null);

  const search = function () {
    if (Postable()) {
      content.current.className = "btn btn-primary";
    } else {
      content.current.className = "btn btn-primary disabled";
    }
  };
  if (myComments == null) {
    myComments = [];
  }
  if (myLikes == null) {
    myLikes = 0;
  }
  if (myTime == null) {
    myTime = "now";
  }

  const postSetter = async function () {
    editPost();
    closeModal.current.click();
    setShouldHide(false);
  };
  async function update() {
    let data;
    if (selectedImage) {
      data = await fetch(
        "http://localhost:12345/api/users/" +
          myComposer.username +
          "/posts/" +
          myId,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: "bearer " + gotToken,
          },
          body: JSON.stringify({
            content: postText.current.value,
            published: myTime,
            imageView: selectedImage,
          }),
        }
      );
    } else {
      data = await fetch(
        "http://localhost:12345/api/users/" +
          myComposer.username +
          "/posts/" +
          myId,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: "bearer " + gotToken,
          },
          body: JSON.stringify({
            content: postText.current.value,
            published: myTime,
          }),
        }
      );
    }
    if (!data) {
      return;
    }
    if (data.status == 403) {
      setShouldHide(true);
    } else {
      postSetter();
    }
  }
  return (
    <div
      className="modal fade"
      id={`edit-post-${myId}`}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Edit post
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              ref={closeModal}
            ></button>
          </div>
          <div className="modal-body">
            {shouldHide && (
              <PostAlert
                shouldHide={shouldHide}
                setShouldHide={setShouldHide}
              />
            )}
            <form>
              <div className="mb-3">
                <textarea
                  ref={postText}
                  onKeyUp={search}
                  className="form-control"
                  id="create-post-text"
                  defaultValue={myText}
                ></textarea>
              </div>
              <div className="input-group">
                <UploadAndDisplayImage
                  addedImg={addedImg}
                  selectedImage={selectedImage}
                  setSelectedImage={setSelectedImage}
                  myImg={myImg}
                />
              </div>
            </form>
          </div>
          <div className="textAlignC">
            <button
              type="button"
              ref={content}
              className="btn btn-primary disabled"
              // data-bs-dismiss="modal"
              aria-label="Close"
              onClick={update}
              style={{ marginBottom: "12px" }}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditPostModal;
