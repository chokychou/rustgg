import React, { Component } from 'react';

import HomePageLogo from './Nav/HomePageLogo';
import LogoWrapper from './LogoWrapper'

export default class NavWrapper extends Component {
    render() {
        return (
            <div className="NavWrapper nav-height-short" id="NavWrapper">
                <HomePageLogo />
            </div>
        )
    }
}
