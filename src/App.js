import React, { Component } from 'react';
import './css/theme.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './components/LandingPage'
import MapPage from './components/MapPage'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/postinumerokartta">
            <MapPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
