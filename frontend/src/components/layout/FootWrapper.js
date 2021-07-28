import React, { Component } from 'react'


export default class FootWrapper extends Component {
    render() {
        return (
            <div className="FootWrapper">
                <footer class="bg-dark text-center text-white">
                    <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                        © 2021 Copyright:
                        <a class="text-white" href="#!">MORUST</a>
                    </div>
                </footer>
            </div>
        )
    }
}
