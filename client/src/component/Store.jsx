import React, {useState, useEffect} from "react";
import API from '../utils/API'
import {useStateValue} from '../utils/StateProvider'
import "./style/store.css";
import Product from './store/Product'

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


  console.log('this is orders>>>', orders)

  return (
    <div className="store">
    
      <Product name={orders.name} image={orders.image}/>
                       
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
