import React, { Component } from 'react'

export default class PaymentContainer extends Component {
    render() {
        return (
            <div className="LoginWrapper">
                <div class="row">
                    <div class="card-deck col-lg-12 text-center">
                        <p>Please select a payment method:</p>
                        <div class="col"><img src="src/alipay.jpg" alt="" /></div>
                        <div class="col"><img src="src/wechat.jpg" alt="" /></div>
                        <div class="col"><img src="src/paypal.png" alt="" /></div>
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
                                    <input type="radio" name="options" id="op1" /> Select						</label>
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
                                    <input type="radio" name="options" id="op2" /> Select						</label>
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
                                    <input type="radio" name="options" id="op3" /> Select						</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}