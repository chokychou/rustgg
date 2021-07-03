import React, { Component } from 'react'
import { ReactComponent as SvgLogo } from "./Body/assets/logo.svg";

var bottom = {
    margin: "0 auto",
    position: "relative",
    top: "-2%",
    zIndex:9999,
    width: "50%",
    height: "30%",
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
                <a href="https://discord.gg/2rG76JRQ" style={ position_zero }>
                    <SvgLogo style={{ fill: "green" }} />
                </a>
            </div>
        )
    }
}
