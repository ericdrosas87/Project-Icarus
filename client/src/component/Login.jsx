import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import "./style/login.css"
import {auth} from '../config/firebaseDB'

export default function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {

            // once successful redirect to homepage
            history.push('/')
        }).catch((e) => alert(e.message))
    }

    const register = (e) => {
        e.preventDefault();

        // register logic here 
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth => {
            // create user and log in, redirect to homepage,
            history.push('/')
        }).catch((e) => alert(e.message))

    }



    return (
    
        <div className="login">
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}></input>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>

                <button onClick={register} className="login__registerButton">Create an Account</button>
            </div>
        </div>
        
    )
}

