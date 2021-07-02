import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavWrapper from './layout/NavWrapper';
import BodyWrapper from './layout/BodyWrapper';

const divStyle = {
    color: 'blue',
};

export default class Home extends Component {
    render() {
        return (
            <div className ="react" id="ReactWrapper" style={divStyle}>
                <NavWrapper />
                <BodyWrapper />
            </div>
        )
    }
}

