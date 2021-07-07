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
          isCheckout: false,
        };
        
        this.publish = this.publish.bind(this);
        this.assignID = this.assignID.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }

    options = [
        { label: "Alipay", value: "alipay"},
        { label: "Wechat Pay", value: "wechat"},
        { label: "Paypal", value: "paypal"}
    ];

    handleChange = (selectedOption) => {
        this.setState({ METHOD_OF_PAYMENT: selectedOption.value });
    };

    assignID({ target }) {
        this.setState({
            [target.name]: target.value,
        });
    }

    publish() {
        console.log( this.state.STEAM_ID );
        console.log( this.state.METHOD_OF_PAYMENT );
        this.setState({ isCheckout: true });
        console.log( this.state.isCheckout );
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
                        <input classname="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                        <label classname="form-check-label" htmlFor="invalidCheck">
                        I have correctly entered the Steam ID.
                        </label>

                    </div>
                    <button type="submit" className="btn btn-primary" onClick={ this.publish }>Submit</button>
                </div>
                </form>
                <button type="submit" className="btn btn-primary" onClick={ this.publish }>Show selection</button>


                <PayPalButton
                    amount="5"
                    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                    onSuccess={(details, data) => {
                    alert("Transaction completed by " + details.payer.name.given_name);

                    // OPTIONAL: Call your server to save the transaction
                    return fetch("/paypal-transaction-complete", {
                        method: "post",
                        body: JSON.stringify({
                            orderID: data.orderID,
                            steam_id: this.state.STEAM_ID
                        })
                    });
                    }}

                    options={{
                        clientId: "VBB9DWZSGCPC4"  //"PRODUCTION_CLIENT_ID"
                      }}
                />    

            </div>
        )
    }
}   