import React, { Component } from 'react';
import Servers_sg from "./Body/Servers/Servers_sg"
import EmptyBuffer from './EmptyBuffer';

import "./Body/Servers/styles.css"
const divStyle = {
    color: 'blue',
};

export default class ServerWrapper extends Component {
    render() {
        return (
            <div className="ServerWrapper">
                <EmptyBuffer />
                <div className="carddiv first">
                    <Servers_sg />
                </div>
                <div className="carddiv second">
                    <Servers_sg />
                </div>
            </div>
        )
    }
}
