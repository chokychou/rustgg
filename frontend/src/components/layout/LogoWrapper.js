import React, { Component } from 'react'
import { ReactComponent as SvgLogo } from "./Body/assets/logo.svg";

var bottom = {
    display:"block",
    position: "absolute",
    zIndex:9999,
    width: "100%"
  }
  
var position_zero = {
    paddingTop: "0px",
    paddingBottom: "0px",
    paddingLeft: "0px",
    paddingRight: "0px",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    width: "100%",
    textAlign: "center",
}

export default class LogoWrapper extends Component {
    render() {
        return (
            <div className="" style={ bottom } >
                <a href="https://discord.gg/2rG76JRQ" >
                    <SvgLogo style={{ fill: "green" }} style={ position_zero } />
                </a>
            </div>
        )
    }
}