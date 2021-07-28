import React, { Component } from 'react'
import PaymentSelect from './PaymentSelect'

export default class PaymentContainer extends Component {
    render() {
        return (
            <div className="LoginWrapper">
                <PaymentSelect />
            </div>
        )
    }
}