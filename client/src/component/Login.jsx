import React, { useState} from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style/login.css";
import { auth } from "../config/firebaseDB";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // once successful redirect to homepage
        
        history.push("/");
      })
      .catch((e) => alert(e.message));

  };

  const register = (e) => {
    e.preventDefault();

    // register logic here
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // create user and log in, redirect to homepage,
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };


  return (
    <div className="section">
      <div className="login">
        <div className="login-container">
          <h1>Sign in</h1>
          <form>
            <div className="inputBox">
              <h5>Email</h5>
              <input
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="inputBox">
              <h5>Password</h5>
              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
          
            <div className="buttonBox">
              <button
              onClick={login}
              type="submit"
              className="login__signInButton"
              >
              Sign In
              </button>

              <button onClick={register} className="login__registerButton">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="logo">
        <FontAwesomeIcon icon="feather-alt" className="icon" />
      </div>
    </div>
  );
}
