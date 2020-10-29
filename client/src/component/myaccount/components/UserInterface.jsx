import React, {useState, useEffect} from 'react'
import {useStateValue} from '../../../utils/StateProvider'
import {Link} from 'react-router-dom'
import '../../style/userInterface.css'
import { auth } from "../../../config/firebaseDB";
import API from '../../../utils/API';
import Item from '../../Item'
import {Button, Modal} from 'react-bootstrap'

function UserInterface() {
    const [{user}] = useStateValue()
    const [{preOrders}, dispatch] = useStateValue()

    const [modal, setModal] = useState(false);

    const handleOpen = () => setModal(true)
    const handleClose = () => setModal(false);

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

    // console.log('this is the preOrders state', preOrders)

    return (
        <div className=" jumbotron main">
            <h1>{user ? user.email : "Please Sign In"}</h1>

            <div className="details">
                <h3>Device Information</h3>

                <Link to='/product'>
                 <h4>Connect New Product</h4>
                </Link>
                
            </div>

            <h2>You currently have {preOrders.length} Device{preOrders.length > 1 || preOrders.length < 1 ? "s" : ""}</h2>

            <div className="display">
                {preOrders ? (
                <div key={preOrders._id}>
                    {preOrders.map(items => (
                    <Item
                    key={items._id}
                    id={items._id}
                    name={items.name}
                    image={items.image}
                    />
                    ))}
                </div>
                
                ): null}
            </div>
            

            <button className="delete__button" onClick={handleOpen}>Delete Account</button>

            <>
                <Modal show={modal} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Deleting Account</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Deleting your Account will remove all Geo-fenced locations as well as your current Products.
                        <br/>
                        Would you like to Contine?
                    </Modal.Body>
                    <Modal.Footer>
                        <Link to='/'>
                            <Button variant="danger" onClick={deleteUser}>
                                Delete Account
                            </Button>
                        </Link>
                        <Button variant="success" onClick={handleClose}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
                

        </div>
    )
}

export default UserInterface
