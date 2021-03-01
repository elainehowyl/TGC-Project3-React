import React, { useState } from 'react';
import axios from 'axios';

import {
    useHistory,
} from "react-router-dom";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'

// form validation is not working: only one error message can appear at one time
// state in useState doesn't reflect immediately

export default function UserRegister() {

    const [form, setForm] = useState({
        'email': '',
        'password': '',
        'first_name': '',
        'last_name': '',
        'contact_number': '',
        'street_name': '',
        'block_number': '',
        'unit_number': '',
        'building_name': '',
        'postal_code': '',
    })

    function updateFormField(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    function nextPage() {
        document.querySelector('#user-registration').style.display = "none";
        document.querySelector('#address-registration').style.display = "block";
    }

    function previousPage() {
        document.querySelector('#user-registration').style.display = "block";
        document.querySelector('#address-registration').style.display = "none";
    }

    function submitRegister() {
        alert("Registration successful!")
    }

    return (
        <React.Fragment>
            <Container className="d-flex justify-content-center">
                <Card>
                    <Form method="POST">
                        <div id="user-registration" style={{ display: 'block' }}>
                            <Card.Header style={{ backgroundColor: '#343a40' }}>
                                <h2 style={{ fontFamily: 'Carter One, cursive', color: 'white' }} className="m-5">STEP 1: REGISTER AN ACCOUNT</h2>
                            </Card.Header>
                            <Card.Body>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" autoComplete="off" value={form.email} placeholder="Enter email" onChange={updateFormField} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" autoComplete="off" value={form.password} placeholder="Enter password" onChange={updateFormField} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" name="first_name" autoComplete="off" value={form.first_name} placeholder="Enter first name" onChange={updateFormField} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" name="last_name" autoComplete="off" value={form.last_name} placeholder="Enter last name" onChange={updateFormField} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control type="text" name="contact_number" autoComplete="off" value={form.contact_number} placeholder="Enter contact number" onChange={updateFormField} />
                                </Form.Group>
                                <Button variant="light" className="mt-4" onClick={nextPage}>Next</Button>
                            </Card.Body>
                        </div>
                        <div id="address-registration" style={{ display: 'none' }}>
                            <Card.Header style={{ backgroundColor: '#343a40' }}>
                                <h2 style={{ fontFamily: 'Carter One, cursive', color: 'white' }} className="m-5">STEP 2: REGISTER AN ADDRESS</h2>
                            </Card.Header>
                            <Card.Body>
                                <Form.Group>
                                    <Form.Label>Street Name</Form.Label>
                                    <Form.Control type="text" name="street_name" autoComplete="off" value={form.street_name} placeholder="Enter street name" onChange={updateFormField} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Block Number</Form.Label>
                                    <Form.Control type="text" name="block_number" autoComplete="off" value={form.block_number} placeholder="Enter block number" onChange={updateFormField} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Unit Number</Form.Label>
                                    <Form.Control type="text" name="unit_number" autoComplete="off" value={form.unit_number} placeholder="Enter unit number" onChange={updateFormField} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Building Name</Form.Label>
                                    <Form.Control type="text" name="building_name" autoComplete="off" value={form.building_name} placeholder="Enter building name" onChange={updateFormField} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Postal Code</Form.Label>
                                    <Form.Control type="text" name="postal_code" autoComplete="off" value={form.postal_code} placeholder="Enter postal code" onChange={updateFormField} />
                                </Form.Group>
                                <div className="mt-4">
                                    <Button variant="light" className="mr-3" onClick={previousPage}>Back</Button>
                                    <Button variant="light" type="submit" onClick={submitRegister}>Register</Button>
                                </div>
                            </Card.Body>
                        </div>
                    </Form>
                </Card>
            </Container>
        </React.Fragment>
    )
}
