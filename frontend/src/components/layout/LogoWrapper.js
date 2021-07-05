import React, { Component } from 'react'
import { ReactComponent as SvgLogo } from "./Body/assets/logo.svg";

var bottom = {
    display:"block",
    position: "absolute",
    zIndex:9999,
    width: "100%",
    margin:"0 auto",
  }
  
var position_zero = {
    paddingTop: "0px",
    paddingBottom: "0px",
    paddingLeft: "0px",
    paddingRight: "0px",
    justifyContent: "center",
    alignItems: "center",
    marginTop:"-100px",
    width: "30vw",
    textAlign: "center",
    top: "0",
    transform: "translate(35vw, 10vw)"
}

var fill ={
    marginTop:"-5px",
    paddingTop: "0px",
    paddingBottom: "0px",
    paddingLeft: "0px",
    paddingRight: "0px",
    width: "100%",
}

export default class LogoWrapper extends Component {
    constructor(props) {
        super(props)
        this.state = { matches: window.matchMedia("(min-width: 580px)").matches };
    }
    
    componentDidMount() {
        const handler = e => this.setState({matches: e.matches});
        window.matchMedia("(min-width: 580px)").addListener(handler);

    }

    render() {
        return (
            <div className="" style={ bottom } >
                {this.state.matches && <a href="https://discord.gg/2rG76JRQ" >
                    <SvgLogo style={{ fill: "green" }} style={ position_zero } />
                </a>}
                {!this.state.matches && <a href="https://discord.gg/2rG76JRQ" >
                    <SvgLogo style={{ fill: "green" }} style={ fill } />
                </a>}

                
            </div>
        )
    }
}