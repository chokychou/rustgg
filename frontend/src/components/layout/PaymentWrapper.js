import React, { Component } from 'react';
import PaymentContainer from './Payment/PaymentContainer';

const container = {
    zIndex:"1",
    position:"relative",
    display:"flex",
    flexFlow: 'column',
    height: '90%'
};

export default class Payment extends Component {
    render() {
        return (
            <div className="ServerWrapper container w3-padding-64" style={ container }>
                <h1 className="display-1">Payment Method</h1>
                <span> &nbsp;</span>
                <PaymentContainer />
            </div>
        )
    }
}
