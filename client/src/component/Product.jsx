import React from 'react'
import './style/product.css'
import API from '../utils/API'

function Product({name,image}) {

    const order = {
        name: name,
        image: image
    }
    const preOrder = (e) => {
        e.preventDefault()
        API.addItem(order)
       
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
                    <button onClick={(e) => preOrder(e)}>Pre-Order</button>
                    <button>Donate</button>
                    <button>Reach Us</button> 
                </div>
                
            </div>

        </div> 
        

    )
}

export default Product
