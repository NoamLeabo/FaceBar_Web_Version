import React from "react";
import MainTextBlock from "../mainTextBlock/MainTextBlock";
import LoginBox from "../loginBox/LoginBox";
import LPStyle from "./LoginPage.css"

function LoginPage({activeUsers}) {
  return (
    <div className="Login">
      <div className="container">
        {/* Creating a row in which we will be inserting Col's */}
        <div className="row">
          {/* Creating a first Col' -Main_Text_Section- in which we will write our logo and some description */}

          <MainTextBlock />

          {/* Creating a second Col' in which we will have the login-Box */}
          <LoginBox activeUsers={activeUsers} />
        </div>

        {/* Adding a visual divider */}
        <hr style={{ margin: "200px 0" }} />
      </div>
    </div>
  );
}
export default LoginPage;
