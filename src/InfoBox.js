import IBStyle from "./InfoBox.css";
import InputGetter from "./InputGetter";
import Btn from "./Btn";

function InfoBox() {
    return(
        <div className="col-xl-4 col-lg-4 col-md-5">
          {/* Creating a card in which we will have all components for the login-Box */}
          <div className="card loginCard">
            {/* Creating the card-body */}
            <div className="card-body">
              {/* Putting the 'Username' input-Box */}
                <InputGetter type="text" text="Username or Email"/>
              {/* Putting the 'Password' input-Box */}
              <InputGetter type="password" text="Password"/>
              {/* Creating a Log-in btn */}
              <Btn className={"fw-bolder btn"} id={"logInBtn"} text={"Log In"}/>
              {/* Adding a 'forgot password?' linker */}
              <a href="#" className="text-reset" style={{ display: 'block', marginTop: '10px' }}>Forgot password?</a>
              {/* Adding a visual divider */}
              <hr style={{ margin: '10px 0' }} />
              {/* Adding a 'create a new account' btn */}
              <Btn className={"fw-bolder btn"} id={"cNewBtn"} text={"Create new account"}/>
            </div>
          </div>
          {/* Adding some motivating text */}
          <div id="genericT">Create a Page for a celebrity, brand, or business.</div>
        </div>
    );
}

export default InfoBox;