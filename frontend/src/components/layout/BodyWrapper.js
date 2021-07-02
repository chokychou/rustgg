import React, { Component } from 'react'

import Header from './Body/Header'

export default class BodyWrapper extends Component {
    render() {
        return (
            <div className="BodyWrapper">
                <Header />
            </div>
        )
    }
}
