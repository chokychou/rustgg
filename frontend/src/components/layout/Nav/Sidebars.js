import React, { Component } from 'react'

import "./Nav.css";

var vip = {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationThickness: "0.3em"    
}

export default class Sidebars extends Component {
    render() {
        return (
            <div className="w3-right w3-hide-small" id="navElements">
                <a href="/servers" className="w3-bar-item w3-button">Servers</a>
                {/**
                *<a href="/rules" className="w3-bar-item w3-button">Rules&FAQ</a>
                 */}
                <a href="/package" className="w3-bar-item w3-button"><p style={vip}>Package</p></a>
            </div>
        )
    }
}
