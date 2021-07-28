import React, { Component } from 'react'

const divStyle = {
    color: 'blue',
};

export default class ThankYou extends Component {
    render() {
        return (
            <div className ="react" id="ReactWrapper" style={divStyle}>
                <p>Thanks for the payment.</p>
            </div>
        )
    }
}
