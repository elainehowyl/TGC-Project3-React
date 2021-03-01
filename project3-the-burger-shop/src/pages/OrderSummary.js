import React from 'react';
import axios from 'axios';

import Card from 'react-bootstrap/Card';

export default function OrderSummary(){

    const userProfile = JSON.parse(localStorage.getItem('fetchedProfile'))
    const userAddressId = localStorage.getItem('fetchedSelectedAddressId')
    console.log("User Profile: ", userProfile)
    console.log("User Address Id: ", userAddressId)

    let fetchCart = JSON.parse(localStorage.getItem('cartAll'))
    console.log("Fetch Cart: ", fetchCart)
    return (
        <React.Fragment>
            <Card></Card>
        </React.Fragment>
    )
}