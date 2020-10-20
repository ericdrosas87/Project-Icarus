import React, { useRef } from "react";
import "./style/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  let ref = useRef();
  return (
    <div className="contact animate__animated animate__zoomIn">
      <h1 className="logo animate__animated animate__heartBeat">
        <FontAwesomeIcon icon="feather-alt" />
        <span>project</span>Icharus
      </h1>
      <div className="wrap">
        <div className="contact-info">
          <h3>Icharus</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon="building" className="contactIcon" />
              Street Address
            </li>
            <li>
              <FontAwesomeIcon icon="phone-alt" className="contactIcon" />
              (123)456.7890
            </li>
            <li>
              <FontAwesomeIcon
                icon="envelope-open-text"
                className="contactIcon"
              />
              project@icharus.com
            </li>
          </ul>
        </div>
        <div className="contact-note">
          <h3>Email Us</h3>
          <form id="contact-form">
            <p>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" ref={ref}></input>
            </p>
            <p>
              <label>Company:</label>
              <input type="text" name="company" id="company"></input>
            </p>
            <p>
              <label>Email:</label>
              <input type="text" name="email" id="email"></input>
            </p>
            <p>
              <label>Phone:</label>
              <input type="text" name="phone" id="phone"></input>
            </p>
            <p className="bottom">
              <label>Message:</label>
              <textarea name="message" rows="5" id="message"></textarea>
            </p>
            <p className="bottom">
              <button type="submit">Submit</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
