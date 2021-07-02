import React, { Component } from 'react';

import HomePageLogo from './Nav/HomePageLogo';

export default class NavWrapper extends Component {
    render() {
        return (
            <div className="NavWrapper" style={{height:"103px"}} id="NavWrapper">
                <HomePageLogo />
            </div>
        )
    }
}
