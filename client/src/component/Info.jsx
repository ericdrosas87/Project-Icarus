import React from "react";
import "./style/info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Info() {
  return (
    <div className="about">
      <h2>
        <FontAwesomeIcon icon="feather-alt" />
        <span>project</span>Icharus
      </h2>
      <div className="block info1 animate__animated animate__slideInDown">
        <img src="./images/placeHolder1.JPG" alt="image1" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in
          fermentum posuere urna nec tincidunt. Ultricies leo integer malesuada
          nunc vel risus commodo viverra. Commodo quis imperdiet massa
          tincidunt.
        </p>
      </div>
      <div className="block info2 animate__animated animate__slideInRight">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
          pharetra pharetra massa massa ultricies mi quis. Quis varius quam
          quisque id diam vel quam elementum. Scelerisque purus semper eget
          duis.
        </p>
        <img src="./images/placeHolder.JPG" alt="image2" />
      </div>
      <div className="block info3 animate__animated animate__zoomIn">
        <img src="./images/placeHolder5.JPG" alt="image3" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel
          orci porta non pulvinar neque laoreet. Sit amet consectetur adipiscing
          elit duis tristique sollicitudin. Ac feugiat sed lectus vestibulum
          mattis ullamcorper velit sed.
        </p>
      </div>
      <div className="block info4 animate__animated animate__slideInLeft">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui ut
          ornare lectus sit amet est placerat. Iaculis urna id volutpat lacus
          laoreet non. Ultrices gravida dictum fusce ut.
        </p>
        <img src="./images/placeHolder3.JPG" alt="image1" />
      </div>
      <div className="block info5 animate__animated animate__slideInUp">
        <img src="./images/placeHolder4.JPG" alt="image1" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum
          leo vel orci porta. Turpis massa sed elementum tempus egestas sed.
          Nulla malesuada pellentesque elit eget gravida.
        </p>
      </div>
    </div>
  );
}

export default Info;
