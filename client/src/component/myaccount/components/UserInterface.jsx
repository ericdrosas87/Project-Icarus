import React from 'react'
import {useStateValue} from '../../../utils/StateProvider'
import {Link} from 'react-router-dom'
import '../../style/userInterface.css'
import { auth } from "../../../config/firebaseDB";
import API from '../../../utils/API';

function UserInterface() {
    const [{user}, dispatch] = useStateValue()
    const [{orders}, change] = useStateValue()

    const deleteUser = () => {
        auth.currentUser.delete()
    }

    if(orders) {
        API.addItem(orders[0])
        console.log("order added to preorder", orders[0])

    }else{

        console.log('No Preordered Items yet')
    }

    console.log("orders in myaccount", orders)

    return (
        <div className="jumbotron Main">
            <h1>{user ? user.email : "Welcome Back"}</h1>

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

            <div className="preorder">
               
            </div>

        </div>
    )
}

export default UserInterface
