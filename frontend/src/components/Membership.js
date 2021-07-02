import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavWrapper from './layout/NavWrapper';
import LoginWrapper from './layout/LoginWrapper';

const divStyle = {
    color: 'blue',
};

export default class Membership extends Component {
    render() {
        return (
            <div className ="react" id="ReactWrapper" style={divStyle}>
                <NavWrapper />
                <LoginWrapper />
            </div>
        )
    }
}

