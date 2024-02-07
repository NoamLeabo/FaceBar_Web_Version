
import './SubscribeContainer.css';
import RegisterBox from '../registerBox/RegisterBox';
// container for the input fields and the sign up button
function SubscribeContainer({setActiveUsers, activeUsers}) {
    return (
        <div className="subscribecontainer">
            <div className="sign">
                Create a new account
            </div>
            <div className="signtext">
                It's quick and easy.
            </div>
            <div className="subscribedetails">
                <RegisterBox setActiveUsers={setActiveUsers} activeUsers={activeUsers} />
            </div>

        </div>
    );
}
export default SubscribeContainer;