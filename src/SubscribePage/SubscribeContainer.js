import InputBox from './InputBox';
import './SubscribeContainer.css';
// container for the input fields and the sign up button
function SubscribeContainer() {
    return (
        <div className="subscribecontainer">
            <div className="sign">
                Create a new account
            </div>
            <div className="signtext">
                It's quick and easy.
            </div>
            <div className="subscribedetails">
                <InputBox />
            </div>

        </div>
    );
}
export default SubscribeContainer;