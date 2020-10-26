import React, {useEffect} from 'react'
import {useStateValue} from '../../../utils/StateProvider'
import {Link} from 'react-router-dom'
import '../../style/userInterface.css'
import { auth } from "../../../config/firebaseDB";
import API from '../../../utils/API';

function UserInterface() {
    const [{user}] = useStateValue()
    const [{preOrders}, dispatch] = useStateValue()

    useEffect(() => {
        API.getPreOrderItems()
        .then(res => dispatch({
            type: "GET_PREORDER_ITEMS",
            preOrders: res.data
        })).catch(err => console.log(err))
    }, [])


    const deleteUser = () => {
        auth.currentUser.delete()
    }
    

    console.log('this is the preOrders state', preOrders)

    return (
        <div className="jumbotron Main">
            <h1>{user ? user.email : "Please Sign In"}</h1>

            <div className="details">
                <h3>Here we will show account information</h3>

                <Link to='/404'>
                 <h4>Connect New Product</h4>
                </Link>
                <br/>
                <Link to='/404'>
                 <h4>Delete existing product</h4>
                </Link>
                <br/>
                <Link to='/map'>
                 <h4>Add new Geo-fence</h4>
                </Link>
                <br/>
                <Link to='/'>
                 <button onClick={deleteUser}>Delete Account</button>
                </Link>
            </div>

            <h2>You currently have {preOrders.length} pre-order/s</h2>
                

        </div>
    )
}

export default UserInterface
