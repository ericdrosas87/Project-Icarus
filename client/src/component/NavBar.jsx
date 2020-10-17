import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style/navbar.css";
import { useStateValue } from "../utils/StateProvider";
import { auth } from "../config/firebaseDB";
import { Link } from "react-router-dom";

function Navbar() {
  const [{ orders, user }] = useStateValue();

  console.log("current user >>", user);

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
        <span>p:</span>Icharus
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
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
              <a className="nav-link">
                <span>About</span>
              </a>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/map">
              <a className="nav-link">
                <span>GPS</span>
              </a>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contact">
              <a className="nav-link">
                <span>Contact</span>
              </a>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/store">
              <a className="nav-link">
                <span>Store</span>
              </a>
            </Link>
          </li>

          <li className="nav-item">
            <Link to={!user && "/login"}>
              <div onClick={login} className="nav-link">
                <span>{user ? "Sign out" : "Sign In"}</span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={user && "/myaccount"}>
              <div className="nav-link">
                <span>{user ? "My Account" : ""}</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
