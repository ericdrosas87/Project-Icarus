import React from 'react'
import axios from 'axios'

function Profile() {
    return (
        <div className="jumbotron">
            
            <form action='POST'>
                <label>Full Name</label>
                <input type="text" name="name" id="name"/>
                <br/>
                <label>Address</label>
                <input type="text" name="address" id="address"></input>
                <br/>
                <label>Phone number:</label>
                <input type="text" name="address" id="address"></input>
            </form>
        </div>
    )
}

export default Profile
