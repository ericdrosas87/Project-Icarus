import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style/logo.css";

function Logo() {
  return (
    <div className="logo">
      <div className="box">
        <span className="spanLogo">
          <FontAwesomeIcon icon="feather-alt" className="icon" />
          <p>
            <span>project</span>Icharus
          </p>
        </span>
      </div>
    </div>
  );
}

export default Logo;
