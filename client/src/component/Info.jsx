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
          <strong>Jesus Rios</strong>
          <br/>
          The Project Icarus idea for me sounds like an incredible steps in the right direction in regards to community responsibility.
          Giving Users the choice of where they can use their firearms is extremely powerful and helpful.
          Working on this project for me was a really eye opening experience, not having much knowledge in firearms made me realize 
          just how important firearms can be for people all over the country.
          In my eyes this concept was created to offer a choice in firearm protection.
        </p>
      </div>
      <div className="block info2 animate__animated animate__slideInRight">
        <p>
        Working on the development of this project was an exciting process for me as I believe the product Icarus is developing
        is the step forward we need to continue towards the middle-ground of 
        gun ownership vs. gun violence
        </p>
        <strong>Zach Sattinger</strong>
        <img src="./images/placeHolder.JPG" alt="image2" />
        
      </div>
      <div className="block info3 animate__animated animate__zoomIn">
        <img src="./images/placeHolder5.JPG" alt="image3" />
        <p>
        <strong>David Dawkins</strong>
        <br/>
        Project Icharus is a concept that involves the community and national well-being. 
        This concept is one i hope to see much more of in some form or fashion. The  convenience 
        of knowing where you are is a bit more secure is always a good thing. Creativity with sound 
        concepts can lead to great ideas for the future.
        </p>
      </div>
    </div>
  );
}

export default Info;
