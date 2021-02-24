import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HomePage';
import Testing2 from './pages/Testing2';
import UserRegister from './pages/UserRegister';
import Testing from './pages/Testing';
import MenuPage from './pages/MenuPage';
import UserAddresses from './pages/UserAddresses';

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
              <Route exact path="/useraddresses">
                <UserAddresses/>
              </Route>
              <Route path="/menu">
                <MenuPage/>
              </Route>
              <Route path="/testing2">
                <Testing2/>
              </Route>
              <Route exact path="/testing">
                <Testing/>
              </Route>
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
