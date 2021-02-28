import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { CartFill } from 'react-bootstrap-icons';
import axios from 'axios';

import '../styles/MenuPage.css';

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import CategoriesBar from './CategoriesBar';
import MenuDisplay from './MenuDisplay';

// import UserContext from '../context/UserContext';

export default function MenuPage() {

    const location = useLocation()
    const history = useHistory()

    // let address_id = location.state.selectedAddress_id
    // let profile = location.state.profile

    // const sharedProfile = {
    //     address_id,
    //     profile
    // }

    // console.log("Shared Profile: ", sharedProfile)

    const testing = JSON.parse(localStorage.getItem('fetchedProfile'))
    const testing2 = localStorage.getItem('fetchedSelectedAddressId')
    console.log(testing)
    console.log(testing2)

    function showCart() {
        alert("Show Cart")
    }
    return (
        <React.Fragment>
            <Navbar bg="danger">
                <Navbar.Brand className="mr-5">
                    <img
                        src="./images/burger_shop_logo.png"
                        width="120"
                        height="100"
                        className="d-inline-block align-top"
                        alt="The Burger Shop Logo"
                    />
                </Navbar.Brand>
                <div id="menu-bar">
                    <Button onClick={showCart} variant="danger">
                        <CartFill style={{ color: "white", width: "40px", height: "40px" }} />
                    </Button>
                </div>
            </Navbar>
            <div id="main-menu">
                <div style={{ width: "20%", backgroundColor: "#ffc107" }}>
                    <CategoriesBar />
                </div>
                <div id="menu-container">
                    <MenuDisplay />
                </div>
            </div>
        </React.Fragment>
    )
}



// export default class MenuPage extends React.Component{
//     render(){
//         return(
//             <React.Fragment>
//                 <Navbar bg="danger">
//                     <Navbar.Brand className="mr-5">
//                       <img
//                          src="./images/burger_shop_logo.png"
//                          width="120"
//                          height="100"
//                          className="d-inline-block align-top"
//                          alt="The Burger Shop Logo"
//                        />
//                     </Navbar.Brand>
//                     <div id="menu-bar">
//                      <Button onClick={this.cartPopOut} variant="danger">
//                       <CartFill style={{color:"white", width:"40px", height:"40px"}}/>
//                      </Button>
//                     </div>
//                 </Navbar>
//                 <div id="main-menu">
//                     <div style={{width:"20%", backgroundColor:"#ffc107"}}>
//                        <CategoriesBar/>
//                     </div>
//                     <div id="menu-container">
//                        <MenuDisplay/>
//                     </div>
//                 </div>
//             </React.Fragment>
//         )
//     }
// }

