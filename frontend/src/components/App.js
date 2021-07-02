import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Home'
import Membership from './Membership'
import RulesFAQ from './RulesFAQ'
import Servers from './Servers'


class App extends Component {
    render() {
        return (
          <Router>
            <div>
              <Switch>
                <Route path="/membership">
                  <Membership />
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

