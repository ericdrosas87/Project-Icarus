import React from "react";
import "./style/landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Slideshow from "./Slideshow";

function Landing() {
  return (
    <div className="landing">
      <div className="sign animate__animated animate__fadeIn">
        <FontAwesomeIcon icon="feather-alt" className="icon" />
      </div>
      <div className="slide">
        <h1>Welcome To Project Icarus</h1>
        <Slideshow />
      </div>

      <Link to='/login'>
        <button> Sign In</button>
      </Link>
    </div>
  );
}

export default Landing;
