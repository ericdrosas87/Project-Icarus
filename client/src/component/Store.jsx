import React, {useEffect} from "react";
import API from '../utils/API'
import {useStateValue} from '../utils/StateProvider'
import "./style/store.css";
import Product from './Product'

function Store() {

  const [{show}, dispatch] = useStateValue();

  useEffect(() => {
    API.getAllItems()
    .then(res => dispatch({
      type: "GET_ITEMS",
      show: res.data[0]
    }))
    .catch(err => console.log(err))
    return () => {
      
    }
  }, [])

  return (
    <div className="store">
    
      <Product id={show._id} image={show.image} name={show.name}/>
        
    </div>
  );

}

export default Store;
