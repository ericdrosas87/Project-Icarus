import React from 'react'
import {useStateValue} from '../../../utils/StateProvider'
import {Link} from 'react-router-dom'
import '../../style/userInterface.css'
import { auth } from "../../../config/firebaseDB";

function UserInterface() {
    const [{user}, dispatch] = useStateValue()

    const deleteUser = () => {
        auth.currentUser.delete()
    }

    return (
        <div className="jumbotron">
            <h1>{user.email}</h1>

            <div className="details">
                <h3>Here we will show account information</h3>

                <Link to='/edit'>
                 <h4>Edit Your Profile</h4>
                </Link>
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
                <Link to='/'>
                 <button onClick={deleteUser}>Delete Account</button>
                </Link>
            </div>
        </div>
    )
}

export default UserInterface
