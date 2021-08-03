import React, { Component } from 'react';

const container = {
    zIndex:"1",
    position:"relative",
    display:"flex",
    flexFlow: 'column',
    height: '90%'
};

export default class PackageWrapper extends Component {
    render() {
        return (
            <div className="ServerWrapper" style={ container }>
                <div className="container w3-padding-64">
                    <h1 className="display-1">List of Packages</h1>
                    <p>All revenue from VIP and Kits go directly into maintaining our server and improving our services. We never planned on making money off our servers simply because we love Rust for what it is. All of our servers are hosted on Dedicated Servers which are more expensive than shared servers. And we also have a better firewall to defend against malicious DDoS attacks. We have full control on every aspect of our servers as we built it from scratch. It is an honor to host Rust servers for our community to play on. And we appreciate your contribution in making Morust possible.</p>
                    <span> &nbsp;</span>
                    <div className="card text-center" style={{ width: "auto"}} id="Singapore">
                        <div className="card-body">
                            <h5 className="card-title">Morust Server VIP</h5>
                            <span> &nbsp;</span>
                            <h1 className="card-title pricing-card-title">$5</h1>
                            <span> &nbsp;</span>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li> &nbsp;</li>
                            <li><strong>Benefits:</strong></li>

                            <li>Increasing drop rate</li>
                            <li>More powerful starting Weapons</li>
                            <li>Becoming a sponsor and VIP on Morust!</li>
                            <li> &nbsp;</li>
                        </ul>
                            <a href="/payment" className="btn btn-primary btn-lg active btn-block" role="button" aria-pressed="true">Buy it Now!</a>
                    </div>
                </div>
            </div>
        )
    }
}
