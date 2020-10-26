import React from 'react'
import './style/product.css'
import {useStateValue} from '../utils/StateProvider'
import API from '../utils/API'

function Item({name,image, id}) {

    const [{preOrders}, dispatch] = useStateValue()

    const removeItem = () => {
        API.deleteItem(id)
        .then(
            dispatch({
            type: "REMOVE_ITEM",
            id: id
        })).catch(err => console.log(err))
        
    }

    return (
        <div className="product">
            <div className="img">
                <img className="product__image" src={image} alt="Daedelus"/>
            </div>
            <div className="product__info">
                <h2>{name}</h2>
                <div className="product__buttons">
                    <button onClick={removeItem}>Remove</button>
                    <button>Modify Geo-Fence</button>
                </div>
                
            </div>

        </div> 
        

    )
}

export default Item
