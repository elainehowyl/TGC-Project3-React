import React, {useState} from 'react'
import axios from 'axios'

import {
    useHistory,
} from "react-router-dom"

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function UserRegister(){

    const [form, setForm] = useState({
        'email':'',
        'password':'',
        'first_name':'',
        'last_name':'',
        'contact_number':'',
        'street_name':'',
        'block_number':'',
        'unit_number':'',
        'building_name':'',
        'postal_code':''
    })

    function updateFormField(event) {
        setForm({
            ...form,
            [event.target.name]:event.target.value
        })
    }

    async function submitRegister(event){
        event.preventDefault();
        const newRegister = {
            'email':form.email,
            'password':form.password,
            'first_name':form.first_name,
            'last_name':form.last_name,
            'contact_number':form.contact_number,
            'street_name':form.street_name,
            'block_number':form.block_number,
            'unit_number':form.unit_number,
            'building_name':form.building_name,
            'postal_code':form.postal_code
        }
        await axios.post('https://8080-f7c0f52e-6461-4223-b83f-1be565cab8b8.ws-us03.gitpod.io/users/create', newRegister)
        alert('registration completed')
    }

    return (
        <React.Fragment>
            <Container>
            <h1 style={{'textAlign':'center'}}>Registration Page</h1>
            <Form method="POST">
                <h4>Register An Account</h4>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={form.email} placeholder="Enter email" onChange={updateFormField}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={form.password} placeholder="Enter password" onChange={updateFormField}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="first_name" value={form.first_name} placeholder="Enter first name" onChange={updateFormField}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="last_name" value={form.last_name} placeholder="Enter last name" onChange={updateFormField}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="text" name="contact_number" value={form.contact_number} placeholder="Enter contact number" onChange={updateFormField}/>
                </Form.Group>
                <h4>Add Address</h4>
                <Form.Group>
                    <Form.Label>Street Name</Form.Label>
                    <Form.Control type="text" name="street_name" value={form.street_name} placeholder="Enter street name" onChange={updateFormField}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Block Number</Form.Label>
                    <Form.Control type="text" name="block_number" value={form.block_number} placeholder="Enter block number" onChange={updateFormField}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Unit Number</Form.Label>
                    <Form.Control type="text" name="unit_number" value={form.unit_number} placeholder="Enter unit number" onChange={updateFormField}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Building Name</Form.Label>
                    <Form.Control type="text" name="building_name" value={form.building_name} placeholder="Enter building name" onChange={updateFormField}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control type="text" name="postal_code" value={form.postal_code} placeholder="Enter postal code" onChange={updateFormField}/>
                </Form.Group>
                <Button variant="light" type="submit" onClick={submitRegister}>Register</Button>
            </Form>
            </Container>
        </React.Fragment>
    )
}