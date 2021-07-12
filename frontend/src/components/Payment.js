import React, { Component } from 'react'
import NavWrapper from './layout/NavWrapper';
import PaymentWrapper from './layout/PaymentWrapper';
import FootWrapper from './layout/FootWrapper';

const divStyle = {
    color: 'blue',
};

export default class RulesFAQ extends Component {
    render() {
        return (
            <div className ="react" id="ReactWrapper" style={divStyle}>
                <NavWrapper />
                <PaymentWrapper />
                <FootWrapper />
            </div>
        )
    }
}
