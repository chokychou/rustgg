import React, { Component } from 'react';

import NavWrapper from './layout/NavWrapper';
import BodyWrapper from './layout/BodyWrapper';
import FootWrapper from './layout/FootWrapper';

const divStyle = {
    color: 'blue',
    minHeight: "100%"
};

export default class Home extends Component {
    render() {
        return (
            <div className ="react" id="ReactWrapper" style={divStyle}>
                <NavWrapper />
                <BodyWrapper />  
                <FootWrapper />
            </div>
        )
    }
}

