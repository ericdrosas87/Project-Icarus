import React from 'react'
import './style/product.css'
import {useStateValue} from '../utils/StateProvider'
import API from '../utils/API'

function Product({id,name,image}) {

    const [{orders}, dispatch] = useStateValue()

    const preOrder = () => {
        // adding item to account
        dispatch({
            type:'ADD_PRODUCT',
            pre_ordered_item:{
                id: id,
                name:name,
                image:image
            }
        })

        API.addItem({orders})
        console.log("this is preOrder button", orders)
        console.log("added item to preOrder collection")

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
                    <button onClick={preOrder}>Pre-Order</button>
                    <button>Donate</button>
                    <button>Reach Us</button> 
                </div>
                
            </div>

        </div> 
        

    )
}

export default Product
