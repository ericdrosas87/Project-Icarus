import React from 'react'
import {useStateValue} from '../utils/StateProvider'

function UserInterface() {
    const [{orders, user}] = useStateValue();

    return (
        <div className="userInterface">
            <h1>Hello</h1>

            <div className="details">
                <h2>Here we will show accoint information</h2>
            </div>
        </div>
    )
}

export default UserInterface
