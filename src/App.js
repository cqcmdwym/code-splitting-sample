import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import asyncComponent from './AsyncComponent';

const AsyncHome = asyncComponent(() => import('./Home'));
const AsyncPageOne = asyncComponent(() => import('./pageOne'));

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pageOne">Page One</Link></li>
          </ul>

          <hr />
          <Switch>
            <Route exact path="/" component={AsyncHome} />
            <Route exact path="/pageOne" component={AsyncPageOne} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
