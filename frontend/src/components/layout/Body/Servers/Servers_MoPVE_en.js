// for nation flags visit: https://purecatamphetamine.github.io

import React, { Component } from 'react'

import "./styles.css"

export default class Servers_MoPVE_en extends Component {
    constructor(props) {
        super(props);
        this.state = { server: 'connect 103.53.126.238:28045' };
      }

    render() {
        return (
            <div className="card transition">
                <h2 className="transition">MORUST SG
                <br/>
                <small>Our legacy server, with more than 50 concurrent players and a player base of over 2,800. <br/> <span>In this server, you will join other player groups to fight zombies and survive!</span></small>
                
                </h2>
                <div className="cta-container transition">
                    <button className="cta" onClick={() => {navigator.clipboard.writeText(this.state.server)}}>Connect</button>
                    </div>
            </div>

        )
    }
}
