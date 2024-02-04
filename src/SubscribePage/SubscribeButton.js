import './SubscribeButton.css'
import './InputBox.js'
function SubscribeButton({inputRef}) {
    const submit = () => {
        alert(inputRef.current.value);
    }
    return (
        <div className='subsc'>
            <button className="subscribe_btn" onClick={submit}><h2>Sign Up</h2></button> {
        }
        </div>
    );
}
export default SubscribeButton;