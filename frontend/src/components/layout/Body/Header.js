import React, { Component } from 'react';
import bg from "./assets/background.svg";
import { ReactComponent as SvgBg } from "./assets/background.svg";
import "./header.css";
import LogoWrapper from"../LogoWrapper";

const height = "500px";
var sectionStyle = {
    minWidth:"500px",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position:"relative",
    backgroundPosition: "8px 8px"
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
    render() {
        return (
            <div id="headerDiv" style={ container }>
                <LogoWrapper />
                <SvgBg class="bg" style={ sectionStyle }/>
            </div>
        )
    }
}