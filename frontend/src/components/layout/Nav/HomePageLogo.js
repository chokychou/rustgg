import React, { Component } from 'react';

import logo from './assets/logo.png';
import dropDown from './assets/drop-down-arrow.svg';
import Sidebar from './Sidebars';

import "./Nav.css";

console.log(logo);

export default class HomePageLogo extends Component {
    render() {
        function handleSubmit(e) {
            var x = document.getElementById('navbar').style.height;
            console.log(document.getElementById('navbar').style);
            console.log(100);
            if (x === '260px'){
                document.getElementById('navbar').style.height='103px'
                document.getElementById('NavWrapper').style.height='103px'
            } else {
                document.getElementById('navbar').style.height='260px'
                document.getElementById('NavWrapper').style.height='260px'
            }
          }

        return (
            <div className=" w3-top w3-bar w3-white w3-wide w3-padding w3-card" id="navbar" style={{height:"103px"}}>
                <div style={{marginTop:"18px"}}>
                <a id="logo" href="../" className="w3-bar-item w3-button" style={{paddingLeft:"5px"}}><span className="w3-padding w3-black w3-opacity-min"><b>Rustgo</b></span></a>
                </div>
                <Sidebar />

                <div className="dropdown" id="subnavbar">
                <button id="dropdownMenuButton" className="w3-right icon w3-bar-item btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={handleSubmit}></button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="/servers">Servers</a>
                    <a className="dropdown-item" href="/rules">Rules & FAQ</a>
                    <a className="dropdown-item" href="/membership">Login</a>
                    </div>
                </div>

            </div>
        )
    }
}
