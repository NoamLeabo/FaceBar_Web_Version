import React from "react";
import "./SubscribePage.css"

function SubscribePage(){
    return(
    <div className="Subscribe">
        <div className="Foobar">
            <div className="foobar">
                foobar
            </div>
            <div className="foobartext">
                Foobar helps you connect and share <br>
                </br>with the people in your life.
            </div>
        </div>
        <div className="subscribecontainer">
        <div className="sign">
                Sign Up
            </div>
        <div className="signtext">
                It's quick and easy.
            </div>
            <div className="subscribedetails">
                <input type="name1" placeholder="First Name"/> <input type="name2" placeholder="Last Name"/>
                <br></br>
                <input type="display name" placeholder="Display name"/>
                <br></br>
                <input type="password" placeholder="New Password"/>
                <br></br>
                <input type="password_check" placeholder="Enter Password again"/>
                <br></br>
                <button className="subscribe_btn">
                    <h2>Create new account</h2>
                </button>

            </div>
    
        </div>
    </div>
    )
    
}
export default SubscribePage;