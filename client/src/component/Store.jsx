import React, {useState, useEffect} from "react";
import API from '../utils/API'
import {useStateValue} from '../utils/StateProvider'
import "./style/store.css";

function Store() {

  const [{orders}, dispatch] = useStateValue();

  useEffect(() => {
    API.getAllItems()
    .then(res => dispatch({
      type: "GET_ITEMS",
      orders: res.data[0].product[0]
    }))
    .catch(err => console.log(err))
    return () => {
      console.log('this is orders', orders)
    }
  }, [])

  function getProduct() {

  }


  console.log('this is orders>>>', orders)

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
        {/* <button onClick={() => getProduct()}>Click here for order info</button> */}
      <div className="jumbotron">
        <ul>
          <li><p>{orders.name}</p></li>
          <li><img src={orders.image} alt=""/></li>
          <li><p></p></li>
          <li><p></p></li>
        </ul> 
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
