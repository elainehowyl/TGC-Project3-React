import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HomePage';
import UserAddress from './pages/UserAddress';
import UserRegister from './pages/UserRegister';
import Testing from './pages/Testing';
import FoodMenu from './pages/FoodMenu'

function App() {
  return (
    <React.Fragment>
        <Router>
          <Switch>
              <Route exact path="/">
                <HomePage/>
              </Route>
              <Route exact path="/register">
                <UserRegister/>
              </Route>
              <Route exact path="/food">
                <FoodMenu/>
              </Route>
              <Route path="/testing">
                <UserAddress/>
              </Route>
              <Route exact path="/testing2">
                <Testing/>
              </Route>
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
