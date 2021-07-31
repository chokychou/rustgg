// for nation flags visit: https://purecatamphetamine.github.io

import React, { Component } from 'react'

import "./styles.css"

export default class Servers_Rustygo extends Component {
    constructor(props) {
        super(props);
        this.state = { server: 'connect 139.99.49.142:28018' };
      }

    render() {
        return (
            <div className="card transition">
                <h2 className="transition">Rustygo
                <br/>
                <small>Our legacy server, with more than 50 concurrent players and a player base of over 2,800. <br/> <span><b>The server is currently offline.</b></span></small>
                
                </h2>
                <div className="cta-container transition">
                    <button className="cta" onClick={() => {navigator.clipboard.writeText(this.state.server)}}>Connect</button>
                    </div>
            </div>

        )
    }
}
