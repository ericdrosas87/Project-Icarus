import React from "react";
import "./style/landing.css";
import {Link} from 'react-router-dom'
import Slideshow from "./Slideshow";

function Landing() {
  return (
    <div className="landing">
      <h1>Welcome To Project Icharus</h1>
      <h4>An Idea for trying times</h4>
      <Slideshow />
      <br/>

      <Link to='/login'>
        <button> Sign In</button>
      </Link>
    </div>
  );
}

export default Landing;
