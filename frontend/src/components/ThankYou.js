import React, { Component } from 'react'

const divStyle = {
    color: 'black',
    minHeight: "100%",
    backgroundColor:'white',
    height:"100vh"
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
