import React, { Component } from 'react'
import Rules from "./layout/Body/Rules.js"
import NavWrapper from './layout/NavWrapper';
import FootWrapper from './layout/FootWrapper';

const divStyle = {
    color: 'black',
    minHeight: "100%",
    backgroundColor:'white'
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
