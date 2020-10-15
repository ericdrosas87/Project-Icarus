import React, { Component } from "react";
import "./style/landing.css";
import Logo from "./Logo";

class Landing extends Component {
  render() {
    return (
      <div class="landing">
        <div className="container">
          <Logo />
        </div>
      </div>
    );
  }
}

export default Landing;
