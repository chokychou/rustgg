import React, { Component } from 'react'

import "./Nav.css";


export default class Sidebars extends Component {
    render() {
        return (
            <div className="w3-right w3-hide-small" id="navElements">
                <a href="/servers" className="w3-bar-item w3-button">Servers</a>
                <a href="/rules" className="w3-bar-item w3-button">Rules&FAQ</a>
                <a href="/membership" className="w3-bar-item w3-button">Membership</a>
            </div>
        )
    }
}
