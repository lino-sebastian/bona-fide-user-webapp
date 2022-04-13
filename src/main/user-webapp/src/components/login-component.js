import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function LoginComponent() {
    let navigate = useNavigate();
    const emailRef = useRef()
    const passwordRef = useRef()

    function handleSubmit() {
        const emailValue = emailRef.current.value
        const passwordValue = passwordRef.current.value
        authorize(emailValue, passwordValue)
    }

    async function authorize(emailValue, passwordValue) {
        const authenticateUrl = '/bona-fide-user-service/api/authenticate'
        const authRequest = {
            email: emailValue,
            password: passwordValue
        }
        await axios.post(authenticateUrl, authRequest)
            .then(response => {
                console.log(response.data)
                localStorage.setItem('token', response.data)
                console.log(response.data.token)
                window.location = "/bona-fide-webapp/"
            })
            .catch(error => {
                console.log(error)
                navigate('/sign-in')
            })
    }

    return (
        <form>
            <h3>Sign In</h3>
            <div className="form-group">
                <label>Email address</label>
                <input ref={emailRef} type="text" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input ref={passwordRef} type="password" className="form-control" placeholder="Enter password" maxLength="8" minLength="4" />
            </div>
            <button type="button"
                className="btn btn-primary btn-block" onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default LoginComponent;