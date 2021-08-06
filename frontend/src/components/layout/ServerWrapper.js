import React, { Component } from 'react';
import Servers_MoPVE_en from "./Body/Servers/Servers_MoPVE_en"
import Servers_MoPVE from "./Body/Servers/Servers_MoPVE"

import "./Body/Servers/styles.css"
const container = {
    zIndex:"1",
    position:"relative",
    display:"flex",
    flexFlow: 'column',
    height: '90%'
};

export default class ServerWrapper extends Component {
    render() {
        return (
            <div className="ServerWrapper container w3-padding-64" style={ container }>
                <h1 className="display-1">Our Servers</h1>
                <span> &nbsp;</span>
                <div>
                    <div style={{alignItems:"center",paddingLeft:"30px",display:"inline-block"}}><Servers_MoPVE_en /></div>
                    <div style={{alignItems:"center",paddingLeft:"30px",display:"inline-block"}}><Servers_MoPVE /></div>
                </div>
                
            </div>
        )
    }
}
