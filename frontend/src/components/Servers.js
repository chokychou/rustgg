import React, { Component } from 'react'

import NavWrapper from './layout/NavWrapper';
import ServerWrapper from './layout/ServerWrapper';
import FootWrapper from './layout/FootWrapper';

const divStyle = {
    color: 'blue',
};

export default class RulesFAQ extends Component {
    render() {
        return (
            <div className ="react" id="ReactWrapper" style={divStyle}>
                <NavWrapper />
                <ServerWrapper />
                <FootWrapper />
            </div>
        )
    }
}
