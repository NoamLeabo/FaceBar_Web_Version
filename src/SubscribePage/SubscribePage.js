import React from "react";
import "./SubscribePage.css"
import SubscribeContainer from "./SubscribeContainer";
import MainTextRegister from "./MainTextRegister";

function SubscribePage(){
    return(
    <div className="Subscribe">
        <MainTextRegister/>
        <SubscribeContainer/>
    </div>
    )
    
};
export default SubscribePage;