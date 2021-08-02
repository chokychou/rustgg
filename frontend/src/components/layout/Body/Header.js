import React, { Component } from 'react';
import { ReactComponent as SvgBg } from "./assets/background.svg";
import "./header.css";
import LogoWrapper from"../LogoWrapper";

const height = "500px";
var sectionStyle = {
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position:"relative",
    backgroundPosition: "8px 8px",
    overflow: "auto",
  };

var container ={
    height: "100%",
    position: "relative",
    
}

var center = {
    margin: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, 0%)"
  }


export default class Header extends Component {

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
            <div id="headerDiv" style={ container }>
                <LogoWrapper />
                {this.state.matches && <SvgBg className="bg" style={ sectionStyle }/>}
                {!this.state.matches && <SvgBg viewBox="250 0 500 929"  className="bg" style={ sectionStyle }/>}
            </div>
        )
    }
}