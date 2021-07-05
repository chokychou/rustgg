import React, { Component } from 'react';
import Servers_sg from "./Body/Servers/Servers_sg"

import "./Body/Servers/styles.css"
const divStyle = {
    color: 'blue',
};

export default class ServerWrapper extends Component {
    render() {
        return (
            <div className="ServerWrapper container w3-padding-64">
                <h1 className="display-1">Our Servers</h1>
                <span> &nbsp;</span>
                <div>
                    <div className="carddiv first">
                        <Servers_sg />
                    </div>
                    <div className="carddiv second">
                        <Servers_sg />
                    </div>
                </div>
                
            </div>
        )
    }
}
