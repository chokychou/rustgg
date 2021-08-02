import React, { Component } from 'react';

import NavWrapper from './layout/NavWrapper';
import BodyWrapper from './layout/BodyWrapper';
import FootWrapper from './layout/FootWrapper';

const divStyle = {
    color: 'black',
    minHeight: "100%",
    backgroundColor:'white',
    height:"100vh"
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

