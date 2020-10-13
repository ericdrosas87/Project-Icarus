import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style/navbar.css";

function Navbar() {
  return (
    <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light animate__animated animate__slideInDown">
      <a class="navbar-brand" href="/">
        <FontAwesomeIcon icon="feather-alt" />
        <span>p:</span>Icharus
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse justify-content-center navbar-collapse"
        id="navbarNavDropdown"
      >
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/about">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/map">
              GPS
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">
              Contact
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/store">
              Store
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
