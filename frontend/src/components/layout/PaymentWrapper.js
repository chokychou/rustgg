import React, { Component } from 'react';
import PaymentContainer from './Payment/PaymentContainer';

const divStyle = {
    color: 'blue',
};

export default class Payment extends Component {
    render() {
        return (
            <div className="ServerWrapper container w3-padding-64">
                <h1 className="display-1">Payment Method</h1>
                <span> &nbsp;</span>
                <PaymentContainer />
            </div>
        )
    }
}
