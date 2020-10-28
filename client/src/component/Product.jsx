import React, { useState } from "react";
import "./style/product.css";
import API from "../utils/API";
import { useStateValue } from "../utils/StateProvider";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

function Product({ name, image }) {
  const [{ user }, dispatch] = useStateValue();

  const [modal, setModal] = useState(false);

    const [modalTwo, setModalTwo] = useState(false)

    const handleClose = () => setModal(false);
    const handleCloseModalTwo = () => setModalTwo(false)
    
    const order = {
        name: name,
        image: image
    }
    
    const preOrder = (e) => {
        e.preventDefault()
        if(user){
            API.addItem(order)
            setModalTwo(true)
        }else{
            setModal(true)
        }
       
    }

    return (
        <div className="product">
            <div className="img">
                <img className="product__image" src={image} alt="Daedelus"/>
            </div>
            <div className="product__info">
                <h2>{name}</h2>

                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, molestiae?
                    Tempore quis veritatis tempora ullam quia alias placeat repellat quasi pariatur fuga provident, 
                    dolorem, ratione nobis impedit, eius nulla sint?
                </p>
                
                <div className="product__buttons">
                    <button onClick={(e) => preOrder(e)}>Add To Account</button>
                    <Link to="/contact">
                        <button className="product__buttons">Reach Us</button> 
                    </Link>
                    
                </div>
                
            </div>


  return (
    <div className="product">
      <div className="img">
        <img className="product__image" src={image} alt="Daedelus" />
      </div>
      <div className="product__info">
        <h2>{name}</h2>
        <p>
          The current prototype of Daedalus Sol is a successful proof of concept
          in regards to part integration, functionality, and style. While the
          current version is 3-D printed ABS plastic, future models will be
          available in forged aluminum. These models will also include a custom
          trigger grouping, grip with the electronics injection molded, and the
          Geo-fence safety system pre-integrated.
        </p>
      <div className="product__buttons">
        <button onClick={(e) => preOrder(e)}>Add</button>
        <Link to="/contact">
          <button className="product__buttons" href="/contact">
            Contact Us
          </button>
        </Link>
          </div>
        </div>
        
            <>
                <Modal show={modalTwo} onHide={handleCloseModalTwo}>
                    <Modal.Header>
                        <Modal.Title>Product Acquired</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Product Has been Added To Your Account!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModalTwo}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>

        

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
