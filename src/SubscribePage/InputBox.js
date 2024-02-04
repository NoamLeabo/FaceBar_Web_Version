import './InputBox.css'
import SubscribeButton from './SubscribeButton';
import { useRef } from 'react';
function InputBox() {
    const inputRef = useRef(null);

    return (
        <div className='InputBox'>
                <input ref={inputRef} type="firstName" placeholder="First Name" id="inp1" />
                <input type="lastName" placeholder="Last Name"  />
                <br></br>
                <input type="display name" placeholder="Display name" />
                <br></br>
                <input type="password" placeholder="New Password" />
                <br></br>
                <input type="password_check" placeholder="Confirm Password" />
                <br></br>
                <SubscribeButton inputRef={inputRef} />
        </div>
        
    );
    
}
export default InputBox;