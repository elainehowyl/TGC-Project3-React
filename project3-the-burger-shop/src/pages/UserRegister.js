import React from 'react'
import axios from 'axios'

import {
    useHistory,
} from "react-router-dom"

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function UserRegister(){
    return (
        <React.Fragment>
            <Container>
            <h1>Registration Page</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter first name"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter contact number"/>
                </Form.Group>
                <Button variant="light" type="submit">Register</Button>
            </Form>
            </Container>
        </React.Fragment>
    )
}