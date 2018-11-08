import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Loadable from 'react-loadable';
import MyLoadingComponent from './MyLoadingComponent';

const AsyncHome = Loadable({
  loader: ()=>import('./Home'),
  loading: MyLoadingComponent
});

const AsyncPageOne = Loadable({
  loader: () => import('./pageOne'),
  loading: MyLoadingComponent
});

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
