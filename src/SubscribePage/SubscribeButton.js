import './SubscribeButton.css'
import './InputBox.js'
// getting from input box the values of the input fields
function SubscribeButton({fname, lname, dname, passw}) {
    const submit = () => {
        alert(fname.current.value);
        alert(lname.current.value);
        alert(dname.current.value);
        alert(passw.current.value);
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