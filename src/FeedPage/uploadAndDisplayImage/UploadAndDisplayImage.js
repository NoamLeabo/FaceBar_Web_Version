import React, { useState } from "react";
import './UploadAndDisplayImage.css'
function UploadAndDisplayImage({addedImg, selectedImage, setSelectedImage})  {


  return (
    <div className="textAlignC">
      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          {/* <button id="removeImgBtn" className ="btn btn-secondary"onClick={() => setSelectedImage(null)}>Remove</button> */}
        </div>
      )}  
      <input type="file" className="form-control" onChange={(event) => {addedImg(event); }} />
    </div>
  );
};

export default UploadAndDisplayImage;
