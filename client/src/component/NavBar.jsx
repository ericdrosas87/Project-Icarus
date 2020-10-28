import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style/navbar.css";
import { useStateValue } from "../utils/StateProvider";
import { auth } from "../config/firebaseDB";
import { Link } from "react-router-dom";

function Navbar() {
  const [{ user }] = useStateValue(); 

  // console.log("current user >>", user);

  // this button function once clicked checks if there is a user in useStateValue if there is it will sign them out.
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light animate__animated animate__slideInDown">
      <a className="navbar-brand" href="/">
        <FontAwesomeIcon icon="feather-alt" />
        <span>p:</span>Icarus
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/about">
                <span className="nav-link">About</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/product">
                <span className="nav-link">Product</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contact">
                <span className="nav-link">Contact Us</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/map">
                <span className="nav-link">{user ? 'Map' : null} </span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/myaccount">
                <span className="nav-link">{user ? "My Account" : null}</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to={!user && '/login' || user && '/'}>
              <div onClick={login} className="nav-link">
                <span>{user ? "Sign out" : "Sign In/Register"}</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
