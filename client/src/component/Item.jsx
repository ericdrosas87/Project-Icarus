import React, {useState} from 'react'
import './style/item.css'
import {useStateValue} from '../utils/StateProvider'
import API from '../utils/API'
import {Button, Modal} from 'react-bootstrap'

function Item({name,image, id}) {

    const [{preOrders}, dispatch] = useStateValue()

    const [modal, setModal] = useState(false);

    const handleOpen = () => setModal(true)
    const handleClose = () => setModal(false);

    const [modalRemove, setModalRemove] = useState(false);

    const handleOpenRemove = () => setModalRemove(true)
    const handleCloseRemove = () => setModalRemove(false);

    const disable = () => {
        dispatch({
            type:"DISABLE_DEVICE",
            id:id
        })
    }

    const removeItem = () => {
        API.deleteItem(id)
        .then(
            dispatch({
            type: "REMOVE_ITEM",
            id: id
        })).catch(err => console.log(err))
        handleCloseRemove()
        
    }

    return (
        <div className="item">
            
            <img className="item__image" src={image} alt="Daedelus"/>
            
            <div className="item__info">
                <h2>{name}</h2>
                <div className="item__buttons">
                    <button onClick={handleOpenRemove}>Remove</button>
                    <button onClick={handleOpen}>Disable</button>
                </div>
                
            </div>

            <>
                <Modal show={modalRemove} onHide={handleCloseRemove}>
                    <Modal.Header>
                        <Modal.Title>Disable Device</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        This Action Will Delete all information on current Device <br/>
                        Continue?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={removeItem}>
                            Remove
                        </Button>
                        <Button variant="danger" onClick={handleCloseRemove}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>

            <>
                <Modal show={modal} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Disable Device</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Continue to Disable Device?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={disable}>
                            Continue
                        </Button>
                        <Button variant="danger" onClick={handleClose}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>

        </div> 
        

    )
}

export default Item
