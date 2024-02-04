import './InputBox.css'

function InputBox() {
    return (
        <div className='InputBox'>
            <input type="firstName" placeholder="First Name" /> <input type="lastName" placeholder="Last Name" />
            <br></br>
            <input type="display name" placeholder="Display name" />
            <br></br>
            <input type="password" placeholder="New Password" />
            <br></br>
            <input type="password_check" placeholder="Confirm Password" />
        </div>
    );
}
export default InputBox;