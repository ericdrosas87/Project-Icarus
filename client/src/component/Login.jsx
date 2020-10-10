import React, {useState} from 'react'
import "./style/login.css"

export default function Login() {
    return (
    
        <div className="login">
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email"></input>
                    <h5>Password</h5>
                    <input type="password"></input>
                    <button type="submit" className="login__signInButton">Sign In</button>
                </form>

                <button className="login__registerButton">Create an Account</button>
            </div>
        </div>
        
    )
}

