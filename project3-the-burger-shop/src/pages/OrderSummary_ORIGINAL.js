import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function OrderSummary() {

    const userProfile = JSON.parse(localStorage.getItem('fetchedProfile'))
    const userAddressId = localStorage.getItem('fetchedSelectedAddressId')
    console.log("User Profile: ", userProfile)
    console.log("User Address Id: ", userAddressId)

    let fetchCart = JSON.parse(localStorage.getItem('cartAll'))
    console.log("Fetch Cart: ", fetchCart)

    let totalPrice = 0
    for (let item of fetchCart) {
        totalPrice += item.price * item.quantity
    }

    function renderOrders() {
        let jsx = []
        for (let item of fetchCart) {
            jsx.push(
                <React.Fragment>
                    <tr>
                        <td style={{ fontSize: '20px', fontFamily: 'Public Sans, sans-serif', fontWeight: 'bold' }}>{item.foodName}</td>
                        <td style={{ fontSize: '20px', fontFamily: 'Public Sans, sans-serif', fontWeight: 'bold' }}>X {item.quantity}</td>
                        <td style={{ fontSize: '20px', fontFamily: 'Public Sans, sans-serif', fontWeight: 'bold' }}>${(item.price * item.quantity / 100).toFixed(2)}</td>
                    </tr>
                </React.Fragment>
            )
        }
        return jsx;
    }
    return (
        <React.Fragment>
            <Container>
                <Card>
                    <Card.Header style={{ fontSize: '40px', fontFamily: 'Carter One, cursive', backgroundColor: '#343a40', color: 'white' }}>Order Review</Card.Header>
                    <Card.Body>
                        <div>
                            <h3 style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 'bold' }}>Customer Details: </h3>
                            <div>
                                <p style={{ fontSize: '20px', fontFamily: 'Public Sans, sans-serif' }}><span style={{ fontWeight: 'bold' }}>Name: </span>  {userProfile.first_name} {userProfile.last_name}</p>
                                <p style={{ fontSize: '20px', fontFamily: 'Public Sans, sans-serif' }}><span style={{ fontWeight: 'bold' }}>Email: </span>  {userProfile.email}</p>
                                <p style={{ fontSize: '20px', fontFamily: 'Public Sans, sans-serif' }}><span style={{ fontWeight: 'bold' }}>Contact Number: </span>  {userProfile.contact_number}</p>
                            </div>
                        </div>
                    </Card.Body>
                    <Card.Body>
                        <div>
                            <h3 style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 'bold' }}>Order Details: </h3>
                            <Table striped>
                                <thead>
                                    <tr>
                                        <th>Food Item</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderOrders()}
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td style={{ fontWeight: 'bold' }}>${(totalPrice / 100).toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div className="d-flex justify-content-end">
                                <Button variant="secondary">Make Payment</Button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </React.Fragment>
    )
}