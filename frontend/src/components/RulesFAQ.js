import React, { Component } from 'react'
import Rules from "./layout/Body/Rules.js"
import NavWrapper from './layout/NavWrapper';
import FootWrapper from './layout/FootWrapper';
import "./w3.css"

const divStyle = {
    color: 'black',
    minHeight: "100%",
    backgroundColor:'white',
    height:"100vh"
};


export default class RulesFAQ extends Component {
    render() {
        return (
            <div className ="react" id="ReactWrapper" style={divStyle}>
                <NavWrapper />
                <Rules />
                <FootWrapper />
            </div>
        )
    }
}
