import React, { Component } from 'react';
import Servers_Rustygo from "./Body/Servers/Servers_Rustygo"
import Servers_Rustyfire from "./Body/Servers/Servers_Rustyfire"
import Servers_MoPVP from "./Body/Servers/Servers_MoPVP"
import Servers_MoPVE from "./Body/Servers/Servers_MoPVE"
import Servers_Huopin from "./Body/Servers/Servers_Huopin"

import "./Body/Servers/styles.css"
const divStyle = {
    color: 'blue',
};

export default class ServerWrapper extends Component {
    render() {
        return (
            <div className="ServerWrapper container w3-padding-64" >
                <h1 className="display-1">Our Servers</h1>
                <span> &nbsp;</span>
                <div>
                    <div style={{alignItems:"center",paddingLeft:"30px",display:"inline-block"}}><Servers_Rustygo /></div>
                    <div style={{alignItems:"center",paddingLeft:"30px",display:"inline-block"}}><Servers_Rustyfire /></div>
                    <div style={{alignItems:"center",paddingLeft:"30px",display:"inline-block"}}><Servers_MoPVP /></div>
                    <div style={{alignItems:"center",paddingLeft:"30px",display:"inline-block"}}><Servers_MoPVE /></div>
                    <div style={{alignItems:"center",paddingLeft:"30px",display:"inline-block"}}><Servers_Huopin /></div>
                    
                </div>
                
            </div>
        )
    }
}
