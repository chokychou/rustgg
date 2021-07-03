import React, { Component } from 'react';

import logo from './assets/logo.png';
import dropDown from './assets/drop-down-arrow.svg';
import Sidebar from './Sidebars';

import "./Nav.css";

console.log(logo);

export default class HomePageLogo extends Component {
    render() {
        function handleSubmit(e) {
            document.getElementById("navbar").classList.remove('nav-height-short');
            document.getElementById("navbar").classList.add('nav-height-tall');
            document.getElementById("NavWrapper").classList.remove('nav-height-short');
            document.getElementById("NavWrapper").classList.add('nav-height-tall');
            document.getElementById("dropdownMenu").style.display = "inline";
            document.getElementById("dropdownMenu").classList.remove('dropdown-menu-button0');
            document.getElementById("dropdownMenu").classList.add('dropdown-menu-button1');
            document.getElementById("dropdownMenuButton").classList.add('button-disappear');
          }

        return (
            <div className=" w3-top w3-bar w3-white w3-wide w3-padding w3-card nav-height-short" id="navbar">
                <div style={{marginTop:"18px", height:"0px"}}>
                <a id="logo" href="../" className="w3-bar-item w3-button" style={{paddingLeft:"5px"}}><span className="w3-padding w3-black w3-opacity-min"><b>Rustgo</b></span></a>
                </div>
                <Sidebar />

                <div className="dropdown" id="subnavbar">
                <button id="dropdownMenuButton" className="w3-right icon w3-bar-item btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false" onClick={handleSubmit} title="show more" style={{disply:"none"}}/>
                    <div className="dropdown-menu dropdown-menu-button0" aria-labelledby="dropdownMenuButton" id="dropdownMenu">
                    <a className="dropdown-item" href="/servers">Servers</a>
                    <a className="dropdown-item" href="/rules">Rules & FAQ</a>
                    <a className="dropdown-item" href="/membership">Login</a>
                    </div>
                </div>
            </div>
        )
    }
}
