import React, { Component } from 'react';

import HomePageLogo from './Nav/HomePageLogo';

export default class NavWrapper extends Component {
    render() {
        return (
            <div className="NavWrapper nav-height-short" id="NavWrapper">
                <HomePageLogo />
            </div>
        )
    }
}
