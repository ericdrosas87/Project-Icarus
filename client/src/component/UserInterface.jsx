import React from 'react'
import {useStateValue} from '../utils/StateProvider'
import {Link} from 'react-router-dom'
import './style/userInterface.css'

function UserInterface() {
    const [{orders, user}] = useStateValue();


    return (
        <div className="userInterface">
            <h1>{user.email}</h1>

            <div className="details">
                <h3>Here we will show account information</h3>
                <br/>
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
                <Link >
                 <h4>Delete Account</h4>
                </Link>

            </div>
        </div>
    )
}

export default UserInterface
