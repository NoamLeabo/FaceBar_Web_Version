import './InputBox.css'
import SubscribeButton from './SubscribeButton';
import { useRef } from 'react';
import React from 'react';
// input fields for the user to sign up
function InputBox() {
    // hook for all the input fields
    const fname = useRef(null);
    const lname= useRef(null);
    const dname= useRef(null);
    const passw= useRef(null);
    return (
        <div className='InputBox'>
            <form>
                <input ref={fname} type="firstName" placeholder="First Name" id="inp1"/>
                <input ref={lname} type="lastName" placeholder="Last Name"  />
                <br></br>
                <input ref={dname} type="display name" placeholder="Display name" />
                <br></br>
                <input ref={passw} type="password" placeholder="New Password" />
                <br></br>
                <input type="password_check" placeholder="Confirm Password" />
                <br></br>
                <input type="file" id="picture" accept="image/*"/>
            </form>
                <SubscribeButton fname={fname} lname={lname} dname={dname} passw={passw}/>
            <div className="exist_acc">
                <a href="" className="acc">Already have an account?</a>
            </div>
        </div>
        
    );
    
}
export default InputBox;