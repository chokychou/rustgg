import React, { Component } from 'react'
import { PayPalButton } from "react-paypal-button-v2";

import Paypal_Button from './Paypal_Button'
import alipay from "./src/alipay.svg"
import wechat from "./src/wechat.svg"
import paypal from "./src/paypal.svg"
import Select from 'react-select';

var fit = {
    display: "block",
    maxWidth:"80%",
    maxHeight:"80%",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%"
}

export default class PaymentSelect extends Component {
    constructor() {
        super();
        this.state = {
          STEAM_ID: "",
          METHOD_OF_PAYMENT: "",
        };
        
        this.assignID = this.assignID.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = { showMessage: false };
      }

    options = [
        //{ label: "Alipay", value: "alipay"},
        //{ label: "Wechat Pay", value: "wechat"},
        { label: "Paypal", value: "paypal"}
    ];

    _showMessage = (bool) => {
        this.setState({
          showMessage: bool
        });
    }

    handleChange = (selectedOption) => {
        this.setState({ METHOD_OF_PAYMENT: selectedOption.value });
    };

    assignID({ target }) {
        this.setState({
            [target.name]: target.value,
        });
    }


    render() {
        if (this.state.isCheckout && this.state.METHOD_OF_PAYMENT=="paypal") {
            return (<Paypal_Button 
                    steam_id={this.state.STEAM_ID}
                    />)
        }

        return (
            <div className="PaymentSelect">
                <div className="container">
                    <div className="row">
                        <div className="col-sm"><img style={fit} src={alipay} alt="" /></div>
                        <div className="col-sm"><img style={fit} src={wechat} alt="" /></div>
                        <div className="col-sm"><img style={fit} src={paypal} alt="" /></div>
                    </div>
                </div>

                <form>
                <label htmlFor="METHOD_OF_PAYMENT">Please choose your method of payment</label>
                <Select 
                    value={this.state.selectedOption}
                    onChange={this.handleChange}
                    options={this.options}
                />

                
                <div className="form-group">
                    <label htmlFor="STEAM_ID">Please enter your Steam ID</label>
                    <input type="text" name="STEAM_ID" value={ this.state.STEAM_ID } onChange={ this.assignID } className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Steam ID" />
                </div>
               
                <div className="col-12">
                    <div classname="form-check">
                        <input classname="form-check-input" type="checkbox" value="" id="invalidCheck" required onClick={this._showMessage.bind(null, true)} />
                        <label classname="form-check-label" htmlFor="invalidCheck" >
                        I have correctly entered the Steam ID.
                        </label>

                    </div>
                    {/*
                    <button type="submit" className="btn btn-primary" onClick={ this.publish }>Submit</button>
                    
                    */}
                </div>
                </form>

                {/** Paypal Button */}
                { this.state.showMessage && this.state.METHOD_OF_PAYMENT==="paypal" && (<div style={{paddingTop:"20px", display:"absolute"}}>
                    <PayPalButton style={{topPadding:"20px"}}
                        amount="5"
                        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                        onSuccess={(details, data) => {
                        alert("Transaction completed by " + details.payer.name.given_name);

                        // OPTIONAL: Call your server to save the transaction
                        return fetch("/api/update-new-purchase/", {
                            method: "post",
                            body: JSON.stringify({
                                orderID: data.orderID,
                                steam_id: this.state.STEAM_ID
                            })
                        }).then(console.log("Payment successful.\n Order id: " + data.orderID + "\n Steam id:" + this.state.STEAM_ID));
                        }}

                        options={{
                            clientId: "VBB9DWZSGCPC4"  //"PRODUCTION_CLIENT_ID"
                        }}
                    />    
                </div>) }      
                

            </div>
        )
    }
}   