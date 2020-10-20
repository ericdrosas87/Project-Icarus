import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./style/navbar.css";
import { useStateValue } from "../utils/StateProvider";
import { auth } from "../config/firebaseDB";

function NavBar2() {
  const [{ orders, user }] = useStateValue();

  console.log("current user >>", user);

  // this button function once clicked checks if there is a user in useStateValue if there is it will sign them out.
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top animate__animated animate__slideInDown">
        <a className="navbar-brand" href="/">
          <FontAwesomeIcon icon="feather-alt" />
          <span>p:</span>Icharus
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
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
    </div>
  );
}

export default NavBar2;
