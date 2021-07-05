import React, { Component } from 'react'

import Login from './Body/Login'

export default class LoginWrapper extends Component {
    render() {
        return (
            <div className="LoginWrapper">
                <h2 className="mb-4" style={{marginTop:"30px"}}>Log In Not Available</h2>
                <Login />
            </div>
        )
    }
}
