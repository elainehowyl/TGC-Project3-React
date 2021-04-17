import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function OrderSummary() {

    const history = useHistory();

    const [endCart, updateCart] = useState([])

    const userProfile = JSON.parse(localStorage.getItem('fetchedProfile'))
    const userSelectedAddress = JSON.parse(localStorage.getItem('fetchedSelectedAddress'))
    // const userAddressId = localStorage.getItem('fetchedSelectedAddressId')
    // console.log("User Profile: ", userProfile)
    // console.log("User Selected Address: ", userSelectedAddress)
    // console.log("User Address Id: ", userAddressId)

    const fetchCart = JSON.parse(localStorage.getItem('cartAll'))
    // console.log("Fetch Cart: ", fetchCart)

    const BASE_API_URL= 'https://8080-f7c0f52e-6461-4223-b83f-1be565cab8b8.ws-us03.gitpod.io/api';

    useEffect(() => {
        updateCart(fetchCart)
    }, [])

    let totalPrice = 0
    for (let item of endCart) {
        totalPrice += item.price * item.quantity
    }

    function deductFromQuantity(item_id) {
        let endCart2 = [...endCart]
        for (let item of endCart2) {
            if (item.quantity > 1) {
                if (item_id === item.foodId) {
                    item.quantity = item.quantity - 1
                    updateCart(endCart2)
                }
            }
        }
    }

    function addToQuantity(item_id) {
        let endCart2 = [...endCart]
        for (let item of endCart2) {
            if (item_id === item.foodId) {
                item.quantity = item.quantity + 1
                updateCart(endCart2)
            }
        }
    }

    function removeFromCart(item_id){
        let endCart2 = [...endCart]
        let index = 0
        for (let item of endCart2){
            if(item_id === item.foodId){
                endCart2.splice(index,1)
                updateCart(endCart2)
            }
            index++
        }
    }

    async function sendOrder(){
        //console.log(endCart)
        // checkout controller here
        // not sure if this work but let's test:
        await axios.get(`${BASE_API_URL}/checkout/checkout`, {
            headers:{
                Authorization: `Bearer ${token}`
            },
            params:{
                'cart': endCart
            }
        })
        // let newCart = {
        //     'user_id':userProfile.id,
        //     'address_id':userSelectedAddress.id,
        //     'total_price':totalPrice,
        //     'duplicate_address':JSON.stringify(userSelectedAddress),
        //     'duplicate_orders':JSON.stringify(endCart),
        // }
        // let response = await axios.post(`${BASE_API_URL}/cart/create`, newCart, {
        //     headers:{
        //         Authorization: `Bearer ${userProfile.token}`
        //     }
        // })
        // console.log(response.data)
        // for(let eachCart of endCart){
        //     let newOrder = {
        //         'user_id':userProfile.id,
        //         'cart_id':response.data,
        //         'food_id':eachCart.foodId,
        //         'quantity':eachCart.quantity,
        //     }
        //     await axios.post(`${BASE_API_URL}/order/create`, newOrder, {
        //         headers:{
        //             Authorization: `Bearer ${userProfile.token}`
        //         },
        //     })
        // }
        // alert("Orders sent successfully!")
        // history.push('/orderstatus')
    }

    function backToMenu(){
        history.push('/menu')
    }

    function renderOrders() {
        let jsx = []
        for (let item of endCart) {
            jsx.push(
                <React.Fragment>
                    <tr>
                        <td>
                            <Button variant="danger" style={{ fontSize: '20px', fontFamily: 'Carter One, cursive'}} onClick={() => removeFromCart(item.foodId)}>Remove</Button>
                        </td>
                        <td>
                            <Form className="d-flex justify-content-center">
                                <Form.Group className="d-flex">
                                    <Button onClick={() => deductFromQuantity(item.foodId)}> - </Button>
                                    <Form.Control value={item.quantity} style={{ width: '75px', textAlign: 'center' }}></Form.Control>
                                    <Button onClick={() => addToQuantity(item.foodId)}> + </Button>
                                </Form.Group>
                            </Form>
                        </td>
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
                    <Card.Header style={{ fontSize: '40px', fontFamily: 'Carter One, cursive', backgroundColor: '#343a40', color: 'white' }}>
                        <h2 className="mt-5 mb-5">Order Review</h2>
                    </Card.Header>
                    <Card.Body>
                        <div>
                            <h3 style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 'bold' }}>Customer Details: </h3><br></br>
                            <div>
                                <p style={{ fontSize: '25px', fontFamily: 'Public Sans, sans-serif' }}><span style={{ fontWeight: 'bold' }}>Name: </span>  {userProfile.first_name} {userProfile.last_name}</p>
                                <p style={{ fontSize: '25px', fontFamily: 'Public Sans, sans-serif' }}><span style={{ fontWeight: 'bold' }}>Email: </span>  {userProfile.email}</p>
                                <p style={{ fontSize: '25px', fontFamily: 'Public Sans, sans-serif' }}><span style={{ fontWeight: 'bold' }}>Contact Number: </span>  {userProfile.contact_number}</p>
                            </div>
                        </div>
                    </Card.Body>
                    <Card.Body>
                        <div>
                            <h3 style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 'bold' }}>Deliver to: </h3><br></br>
                            <div>
                                <p style={{fontSize:'25px', fontFamily: 'Public Sans, sans-serif'}}>{userSelectedAddress.street_name}{userSelectedAddress.block_number ? ', Blk' : ''} {userSelectedAddress.block_number}</p>
                                <p style={{fontSize:'25px', fontFamily: 'Public Sans, sans-serif'}}>#{userSelectedAddress.unit_number}</p>
                                <p style={{fontSize:'25px', fontFamily: 'Public Sans, sans-serif'}}>{userSelectedAddress.building_name}</p>
                                <p style={{fontSize:'25px', fontFamily: 'Public Sans, sans-serif'}}>Postal Code: {userSelectedAddress.postal_code}</p>
                            </div>
                        </div>
                    </Card.Body>
                    <Card.Body>
                        <div>
                            <h3 style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 'bold' }}>Order Details: </h3>
                            <Table striped>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
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
                                        <td></td>
                                        <td></td>
                                        <td style={{ fontWeight: 'bold' }}>${(totalPrice / 100).toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div></div>
                            <div className="d-flex justify-content-end">
                                <Button variant="warning" style={{fontSize:'20px', fontFamily:'Carter One, cursive'}} onClick={backToMenu}>Back to Menu</Button>
                                <Button variant="success" style={{ fontSize: '20px', fontFamily: 'Carter One, cursive'}} onClick={sendOrder}>CheckOut</Button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </React.Fragment>
    )
}