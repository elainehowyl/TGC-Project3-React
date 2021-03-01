import React from 'react';
import { useHistory } from 'react-router-dom';
import { CartFill } from 'react-bootstrap-icons';

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import CategoriesBar from './CategoriesBar';
import MenuDisplay from './MenuDisplay';

export default function MenuPage() {

    const history = useHistory()

    function showCart() {
        history.push('/ordersummary')
    }
    return (
        <React.Fragment>
            <Navbar bg="dark">
                <Navbar.Brand className="mr-5">
                    <img
                        src="./images/burger_shop_logo.png"
                        width="120"
                        height="100"
                        className="d-inline-block align-top"
                        alt="The Burger Shop Logo"
                    />
                </Navbar.Brand>
                <div className="d-flex justify-content-end">
                    <Button onClick={showCart} variant="dark">
                        <CartFill style={{ color: "white", width: "40px", height: "40px" }} />
                    </Button>
                </div>
            </Navbar>
            <div className="d-flex">
                <div style={{ width: "20%", backgroundColor: "#ffc107" }}>
                    <CategoriesBar />
                </div>
                <div style={{width:'80%'}} className="d-flex flex-wrap">
                    <MenuDisplay />
                </div>
            </div>
        </React.Fragment>
    )
}

