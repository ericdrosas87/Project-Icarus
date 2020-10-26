import React from 'react'
import './style/product.css'
import API from '../utils/API'
import {useStateValue} from '../utils/StateProvider'
import {Link} from 'react-router-dom'

function Product({name,image}) {
    const [{user}, dispatch] = useStateValue()
    const order = {
        name: name,
        image: image
    }
    
    const preOrder = (e) => {
        e.preventDefault()
        if(user){
            API.addItem(order)
            alert("Item Has been Added To Your Account")
        }else{
            alert("Please Sign In or Register To Add Item to Account")
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
                    <button>Donate</button>
                    <Link to="/contact">
                        <button className="product__buttons">Reach Us</button> 
                    </Link>
                    
                </div>
                
            </div>

        </div> 
        

    )
}

export default Product
