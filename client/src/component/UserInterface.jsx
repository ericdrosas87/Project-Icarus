import React from 'react'
import {useStateValue} from '../utils/StateProvider'
import {Link} from 'react-router-dom'
import './style/userInterface.css'

function UserInterface() {
    const [{orders, user}] = useStateValue();


    return (
        <div className="userInterface">
            <h1>Hello {user?.email}</h1>

            <div className="details">
                <h2>Here we will show account information</h2>
                <br/>
                <Link to='/404'>
                 <h3>Connect New Product</h3>
                </Link>
                <br/>
                <Link to='/404'>
                 <h3>Delete existing product</h3>
                </Link>
                <br/>
                <Link to='/map'>
                 <h3>Add new Geo-fence</h3>
                </Link>
                <br/>
                <Link >
                 <h3>Delete Account</h3>
                </Link>

            </div>
        </div>
    )
}

export default UserInterface
