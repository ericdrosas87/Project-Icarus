import React from "react";
import "./style/landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slideshow from "./Slideshow";

function Landing() {
  return (
    <div className="landing">
      <div className="sign animate__animated animate__fadeIn">
        <FontAwesomeIcon icon="feather-alt" className="icon" />
      </div>
      <div className="slide">
        <Slideshow />
      </div>
    </div>
  );
}

export default Landing;
