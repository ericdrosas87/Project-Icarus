import React from 'react'
import {useStateValue} from '../../utils/StateProvider'

function Product({name,image}) {


    return (
        <div className="jumbotron">
            <p>{name}</p>
            <img src={image} alt=""/>
            
        <button>Pre-order</button>
      </div>
    )
}

export default Product
