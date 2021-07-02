import React, { Component } from 'react'
import Rules from "./layout/Body/Rules.js"
import EmptyBuffer from './layout/EmptyBuffer.js';
import NavWrapper from './layout/NavWrapper';

const divStyle = {
    color: 'blue',
};


export default class RulesFAQ extends Component {
    render() {
        return (
            <div className ="react" id="ReactWrapper" style={divStyle}>
                <NavWrapper />
                <Rules />
            </div>
        )
    }
}
