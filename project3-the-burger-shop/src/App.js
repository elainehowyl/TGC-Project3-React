import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HomePage';
import UserAddress from './pages/UserAddress';
import UserRegister from './pages/UserRegister'

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
              <Route exact path="/register">
                  <UserRegister/>
              </Route>
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
