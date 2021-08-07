import React, { Component } from 'react'
import NavWrapper from './layout/NavWrapper';
import FootWrapper from './layout/FootWrapper';
import PaymentSelect from './layout/Payment/PaymentSelect';

import alipay from "./layout/Payment/src/alipay.svg"
import wechat from "./layout/Payment/src/wechat.svg"
import QR from "./layout/Body/assets/cn_pay.png"

const divStyle = {
    color: 'black',
    minHeight: "100%",
    backgroundColor:'white',
    height:"100vh"
};

const container = {
    zIndex:"1",
    position:"relative",
    display:"flex",
    flexFlow: 'column',
    height: '90%'
};

var fit = {
    display: "block",
    maxWidth:"80%",
    maxHeight:"80%",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%"
}


export default class PaymentSG extends Component {
    render() {
        return (
            <div className ="react" id="ReactWrapper" style={divStyle}>
                <NavWrapper />
                <div className="ServerWrapper container w3-padding-64" style={ container }>
                    <h1 className="display-1">Payment Method</h1>
                    <span> &nbsp;</span>
                    <div className="container">
                    <div className="row">
                        <div className="col-sm"><img style={fit} src={alipay} alt="" /></div>
                        <div className="col-sm"><img style={fit} src={wechat} alt="" /></div>
                    </div>
                </div>
                
                    <div className="PaymentSelect">
                        <p>Please scan the QR code below to complete the transaction.</p>
                        <div className="col-sm"><img style={fit} src={QR} alt="" /></div>
                    </div>
                </div>
                <FootWrapper />
            </div>
        )
    }
}
