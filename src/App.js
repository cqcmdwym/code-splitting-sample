import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import PageOne from './pageOne';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/pageOne">Page One</Link></li>
        </ul>
  
        <hr/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/pageOne" component={PageOne}/>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
