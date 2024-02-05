import HLStyle from "./HLineTextBlock.css";
import SLineTextBlock from "./SLineTextBlock";

function HLineTextBlock(params) {
  return (
    <>
    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-3 col-xs-5"></div>
    <div className="col-xl-7 col-lg-6 col-md-6 col-sm-6 col-xs-6">
      <div className="fw-bolder hPageT" id="fT">
        faceBar
      </div>

      {/* Description */}
      <SLineTextBlock text={"Connect with foo and the hello-world"} />
      <SLineTextBlock text={"around you on FaceBar."} />
    </div>
    </>
  );
}

export default HLineTextBlock;
