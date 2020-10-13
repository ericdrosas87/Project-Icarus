import React from "react";

function Footer() {
  return (
    <footer className="footer fixed-bottom">
      <span>Final Project</span>
      <span> {"Copyright © "} </span>
      <span> {new Date().getFullYear()} </span>
    </footer>
  );
}

export default Footer;
