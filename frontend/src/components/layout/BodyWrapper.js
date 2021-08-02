import React, { Component } from 'react'

import Header from './Body/Header'

const container = {
    zIndex:"1",
    position:"relative",
    display:"flex",
    flexFlow: 'column',
    height: '90%'
};

export default class BodyWrapper extends Component {
    render() {
        return (
            <div className="BodyWrapper" style={ container }>
                <Header />
            </div>
        )
    }
}
