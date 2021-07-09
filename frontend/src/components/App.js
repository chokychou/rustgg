import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Home'
import Package from './Package'
import RulesFAQ from './RulesFAQ'
import Servers from './Servers'
import Payment from './Payment'
import "./w3.css"


class App extends Component {
  
    render() {
        return (
          <Router>
            <div>
              <Switch>
                <Route path="/payment">
                  <Payment />
                </Route>

                <Route path="/package">
                  <Package />
                </Route>

                <Route path="/rules">
                  <RulesFAQ />
                </Route>

                <Route path="/servers">
                  <Servers />
                </Route>

                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        )
    }
}

export default App;

