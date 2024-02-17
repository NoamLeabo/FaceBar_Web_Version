import HLStyle from "./MainTextBlock.css";
import SubTextBlock from "../subTextBlock/SubTextBlock";

function MainTextBlock() {
  return (
    <>
    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-3 col-xs-5"></div>
    <div className="col-xl-7 col-lg-6 col-md-6 col-sm-6 col-xs-6">
      <div className="fw-bolder hPageT" id="fT">
        faceBar
      </div>

      {/* Description */}
      <SubTextBlock text={"Connect with foo and the hello-world"} />
      <SubTextBlock text={"around you on FaceBar."} />
    </div>
    </>
  );
}

export default MainTextBlock;
