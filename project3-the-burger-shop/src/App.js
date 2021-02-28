import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HomePage';
import UserRegister from './pages/UserRegister';
import MenuPage from './pages/MenuPage';
import UserAddresses from './pages/UserAddresses';
import OrderSummary from './pages/OrderSummary';

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
              <Route path="/ordersummary">
                <OrderSummary/>
              </Route>
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
