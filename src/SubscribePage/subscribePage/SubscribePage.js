import React from "react";
import "./SubscribePage.css"
import SubscribeContainer from "../subscribeContainer/SubscribeContainer";
import MainTextRegister from "../mainTextRegister/MainTextRegister";

function SubscribePage({setActiveUsers, activeUsers}){
    return(
    <>
    <div className="Subscribe">
        <MainTextRegister/>
        <SubscribeContainer setActiveUsers={setActiveUsers} activeUsers={activeUsers} />
    </div>
    <hr style={{ margin: "900px 0" }} />
    </>
    )
    
};
export default SubscribePage;