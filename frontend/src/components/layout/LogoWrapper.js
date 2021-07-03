import React, { Component } from 'react'
import { ReactComponent as SvgLogo } from "./Body/assets/logo.svg";

var bottom = {
    margin: "0",
    position: "absolute",
    left: "50%",
    bottom: "0%",
    transform: "translate(-50%, 0%)",
  }
  
var disNserver = {
    position:"relative",
    display: "inline-block",
    textDecoration: "none",
    paddingTop: "0px",
    paddingBottom: "0px",
    paddingLeft: "0px",
    paddingRight: "0px",
    margin: "0px auto",
    height:"100px",
    zIndex:"9999"
}

var position_zero = {
    paddingTop: "0px",
    paddingBottom: "0px",
    paddingLeft: "0px",
    paddingRight: "0px",
}
export default class LogoWrapper extends Component {
    render() {
        return (
            <div className="LogoWrapper" style={ bottom } id="disNserver">
                <a href="https://discord.gg/2rG76JRQ" styple={ position_zero }>
                    <SvgLogo style={{ fill: "green" }} />
                </a>
            </div>
        )
    }
}
