import React from "react";
import "./style/store.css";

function Store() {
  return (
    <div className="store">
      <div className="cards animate__animated animate__lightSpeedInLeft">
        <div className="card-image">
          <img src="./images/placeHolder6.JPG" alt="stage1" />
        </div>
        <div className="card-info">
          <h5>Pre-Order</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris
            augue neque gravida in fermentum et sollicitudin. Justo donec enim
            diam vulputate.
          </p>
        </div>
      </div>
      <div className="cards animate__animated animate__zoomIn">
        <div className="card-image">
          <img src="./images/placeHolder2.JPG" alt="stage2" />
        </div>
        <div className="card-info">
          <h5>Company Investment</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris
            augue neque gravida in fermentum et sollicitudin. Justo donec enim
            diam vulputate.
          </p>
        </div>
      </div>
      <div className="cards animate__animated animate__lightSpeedInRight">
        <div className="card-image">
          <img src="./images/placeHolder3.JPG" alt="stage3" />
        </div>
        <div className="card-info">
          <h5>Contact</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris
            augue neque gravida in fermentum et sollicitudin. Justo donec enim
            diam vulputate.
          </p>
        </div>
      </div>
    </div>
  );
  /*INITIAL SETUP*/
  /* return (
    <div class="jumbotron">
      <div class="row">
        <div class="card">
          <img src="" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="./images/bg.jpg" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="./images/bg.jpg" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="./images/bg.jpg" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  ); */
}

export default Store;
