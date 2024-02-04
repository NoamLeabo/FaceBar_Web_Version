import InputBox from './InputBox';
import './SubscribeContainer.css';
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