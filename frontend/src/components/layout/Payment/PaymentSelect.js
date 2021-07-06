import React, { Component } from 'react'
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
    }

    render() {
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

            </div>
        )
    }
}