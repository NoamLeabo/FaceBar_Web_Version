import './SubscribeButton.css'
import './InputBox.js'
// button to sign up and go to other page
// getting from input box the values of the input fields
function SubscribeButton({fname, lname, dname, passw}) {
    const subscriber= {
        "firstname": fname,
        "lastname": lname,
        "displayname": dname,
        "passw": passw,
    }
    const submit = () => {
        // allerting on the screen to see that values realy are being passed
        // need here to send the values to the login page and go to login page
        alert(subscriber.firstname.current.value);
        alert(subscriber.lastname.current.value);
        alert(subscriber.displayname.current.value);
        alert(subscriber.passw.current.value);
    }
    return (
        // oncklick funct to do when sign up is clicked
        <div className='subsc'>
            <button className="subscribe_btn" onClick={submit}><h2>Sign Up</h2></button> {
        }
        </div>
    );
}
export default SubscribeButton;