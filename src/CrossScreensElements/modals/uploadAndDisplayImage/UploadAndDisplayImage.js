import React, { useState } from "react";
import { useRef } from "react";
import "./UploadAndDisplayImage.css";
function UploadAndDisplayImage({ addedImg, selectedImage, setSelectedImage }) {
  const fileInput = useRef(null);

  const remImg = () => {
    setSelectedImage(null);
    fileInput.current.value = "";
  };

  return (
    <div className="textAlignC">
      {selectedImage && (
        <div>
          <img
            style={{ marginBottom: "20px" }}
            alt="not found"
            width={"250px"}
            src={`data:image/jpeg;base64,${selectedImage}`}
          />
          <button
            id="removeImgBtn"
            className="btn btn-secondary"
            onClick={remImg}
          >
            Remove
          </button>
        </div>
      )}
      <input
        ref={fileInput}
        type="file"
        defaultValue=""
        className="form-control"
        onChange={(event) => {
          addedImg(event);
        }}
      />
    </div>
  );
}

export default UploadAndDisplayImage;
