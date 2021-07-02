import React, { Component } from 'react';
import bg from './assets/background.png';
import ds from "./assets/discord-logo.svg";
import gm from "./assets/game-logo.svg";
import "./header.css";

const height = "500px";
var sectionStyle = {
    backgroundImage: `url(${bg})`,
    width: "100%",
    height:height,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };

var container ={
    height: height,
    position: "relative",
}

var center = {
    margin: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, 0%)"
  }

var bottom = {
    margin: "0",
    position: "absolute",
    left: "50%",
    bottom: "0%",
    transform: "translate(-50%, 0%)",
    paddingTop: "80px"
  }
export default class Header extends Component {
    render() {
        return (
            <div id="headerDiv" style={{zIndex:"1",background: "linearGradient(#fffff, #002f36)"}}>
                <section style={ sectionStyle }>
                <div style={ container }>
                    <div style={ bottom } id="disNserver">
                        <a href="https://discord.gg/2rG76JRQ">
                            <img src={ ds } />
                        </a>

                        <a href="">
                            <img src={ gm } />
                        </a>
                    </div>
                </div>
                </section>
            </div>
        )
    }
}