import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function SignUpComponent() {
    let navigate = useNavigate();
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    function handleSubmit() {
        const emailValue = emailRef.current.value
        const passwordValue = passwordRef.current.value
        const confirmPassword = passwordConfirmRef.current.value
        if (passwordValue === confirmPassword) {
            register(emailValue, passwordValue)
        }
        else {
            alert("Password Mismatch!")
            return
        }
    }

    async function register(emailValue, passwordValue) {
        const registerUrl = '/bona-fide-user-service/api/save'
        const registerRequest = {
            email: emailValue,
            password: passwordValue
        }
        console.log(registerRequest)
        await axios.post(registerUrl, registerRequest)
            .then(response => {
                console.log(response.data)
                navigate('/sign-in')
            })
            .catch(error => { console.log(error) })

    }

    return (
        <form>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>Email address</label>
                <input ref={emailRef} type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input ref={passwordRef} type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <label>Confirm Password</label>
                <input ref={passwordConfirmRef} type="password" className="form-control" placeholder="Re-Enter password" />
            </div>

            <button type="button" onClick={handleSubmit} className="btn btn-primary btn-block">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="/sign-in">sign in?</a>
            </p>
        </form>
    )
}

export default SignUpComponent;