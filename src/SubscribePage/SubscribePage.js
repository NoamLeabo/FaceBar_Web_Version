import React from "react";
import "./SubscribePage.css"
import SubscribeContainer from "./SubscribeContainer";
import MainTextRegister from "./MainTextRegister";

function SubscribePage(){
    return(
    <>
    <div className="Subscribe">
        <MainTextRegister/>
        <SubscribeContainer/>
    </div>
    <hr style={{ margin: "700px 0" }} />
    </>
    )
    
};
export default SubscribePage;