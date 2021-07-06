import React, { Component } from 'react'
import alipay from "./src/alipay.svg"
import wechat from "./src/wechat.svg"
import paypal from "./src/paypal.svg"

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
                   
                <div class="card-deck col-lg-12 text-center btn-group" data-toggle="buttons">
                    <div class="card mb-4 shadow-sm">
                        <div class="card-header">
                            <h4 class="my-0 font-weight-normal">Alipay</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">¥30</h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>CNY</li>
                            </ul>
                            <label for="op1" class="btn btn-lg btn-block btn-outline-primary">
                                <input type="radio" name="options" id="op1" /> Select</label>
                        </div>
                    </div>

                    <div class="card mb-4 shadow-sm">
                        <div class="card-header">
                            <h4 class="my-0 font-weight-normal">Wechat Pay</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">¥30</h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>CNY</li>
                            </ul>
                            <label for="op2" class="btn btn-lg btn-block btn-outline-primary">
                                <input type="radio" name="options" id="op2" /> Select</label>
                        </div>
                    </div>

                    <div class="card mb-4 shadow-sm">
                        <div class="card-header">
                            <h4 class="my-0 font-weight-normal">PayPal</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">$5</h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>USD</li>
                            </ul>
                            <label for="op3" class="btn btn-lg btn-block btn-outline-primary">
                                <input type="radio" name="options" id="op3" /> Select</label>
                        </div>
                    </div>
                </div>

                <form>
                    
                <div class="form-group">
                    <label for="exampleInputEmail1">Please enter your Steam ID</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Steam ID" />
                </div>
               
                <div class="col-12">
                    <div classname="form-check">
                        <input classname="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                        <label classname="form-check-label" for="invalidCheck">
                        I have correctly entered the Steam ID.
                        </label>

                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
                </form>
            </div>
        )
    }
}