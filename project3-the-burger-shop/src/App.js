import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HomePage'
import UserAddress from './pages/UserAddress'

function App() {
  return (
    <React.Fragment>
        <Router>
          <Switch>
              <Route exact path="/">
                <HomePage/>
              </Route>
              <Route exact path="/testing">
                <UserAddress/>
              </Route>
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
