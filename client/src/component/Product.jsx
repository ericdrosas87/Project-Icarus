import React, { useState } from "react";
import "./style/product.css";
import API from "../utils/API";
import { useStateValue } from "../utils/StateProvider";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

function Product({ name, image }) {
  const [{ user }, dispatch] = useStateValue();

  const [modal, setModal] = useState(false);

  const handleClose = () => setModal(false);

  const order = {
    name: name,
    image: image,
  };

  const preOrder = (e) => {
    e.preventDefault();
    if (user) {
      API.addItem(order);
      alert("Item Has been Added To Your Account");
    } else {
      setModal(true);
    }
  };

  return (
    <div className="product">
      <div className="img">
        <img className="product__image" src={image} alt="Daedelus" />
      </div>
      <div className="product__info">
        <h2>{name}</h2>

        <p>
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id,
          molestiae? Tempore quis veritatis tempora ullam quia alias placeat
          repellat quasi pariatur fuga provident, dolorem, ratione nobis
          impedit, eius nulla sint?
        </p>
      </div>
      <div className="product__buttons">
        <button onClick={(e) => preOrder(e)}>Add</button>
        <Link to="/contact">
          <button className="product__buttons" href="/contact">
            Contact Us
          </button>
        </Link>
      </div>

      <>
        <Modal show={modal} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>User Required</Modal.Title>
          </Modal.Header>
          <Modal.Body>Please Sign In or Register to Contine</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default Product;
