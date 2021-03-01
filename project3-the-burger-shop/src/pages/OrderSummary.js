import React from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export default function OrderSummary(){

    const userProfile = JSON.parse(localStorage.getItem('fetchedProfile'))
    const userAddressId = localStorage.getItem('fetchedSelectedAddressId')
    console.log("User Profile: ", userProfile)
    console.log("User Address Id: ", userAddressId)

    let fetchCart = JSON.parse(localStorage.getItem('cartAll'))
    console.log("Fetch Cart: ", fetchCart)

    function renderOrders(){
        let jsx = []
        for(let item of fetchCart){
            jsx.push(
                <React.Fragment>
                    <div>
                        <p style={{fontSize:'25px', fontFamily: 'Public Sans, sans-serif', fontWeight:'bold'}}>{item.foodName}</p>
                        <p style={{fontSize:'20px', fontFamily: 'Public Sans, sans-serif'}}>${(item.price/100).toFixed(2)}     X{item.quantity}</p>
                    </div>
                </React.Fragment>
            )
        }
        return jsx;
    }
    return (
        <React.Fragment>
            <Container>
                <Card>
                    <Card.Header style={{fontSize:'40px', fontFamily:'Carter One, cursive', backgroundColor:'#343a40', color:'white'}}>Order Review</Card.Header>
                    <Card.Body>
                        <div>
                            <h3 style={{fontFamily: 'Public Sans, sans-serif', fontWeight:'bold'}}>Customer Details: </h3>
                            <div>
                              <p style={{fontSize:'20px', fontFamily: 'Public Sans, sans-serif'}}>Name: {userProfile.first_name} {userProfile.last_name}</p>
                              <p style={{fontSize:'20px', fontFamily: 'Public Sans, sans-serif'}}>Email: {userProfile.email}</p>
                              <p style={{fontSize:'20px', fontFamily: 'Public Sans, sans-serif'}}>Contact Number: {userProfile.contact_number}</p>
                            </div>
                        </div>
                    </Card.Body>
                    <Card.Body>
                        <div>
                            <h3 style={{fontFamily: 'Public Sans, sans-serif', fontWeight:'bold'}}>Order Details: </h3>
                            {renderOrders()}
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </React.Fragment>
    )
}