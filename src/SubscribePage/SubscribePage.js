import React from "react";
import "./SubscribePage.css"
import SubscribeContainer from "./SubscribeContainer";
import MainTextRegister from "./MainTextRegister";

function SubscribePage({setActiveUsers, activeUsers}){
    return(
    <>
    <div className="Subscribe">
        <MainTextRegister/>
        <SubscribeContainer setActiveUsers={setActiveUsers} activeUsers={activeUsers} />
    </div>
    <hr style={{ margin: "700px 0" }} />
    </>
    )
    
};
export default SubscribePage;