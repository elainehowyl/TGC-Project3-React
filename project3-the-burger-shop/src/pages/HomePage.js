import React, {useState} from 'react'
import axios from 'axios'

import {
    useHistory,
} from "react-router-dom"

import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


export default function HomePage(){

    const [form, setForm] = useState({
        'email': "",
        'password': ""
    })

    const history = useHistory();

    function updateFormField(event){
        setForm({
            ...form,
            [event.target.name] : event.target.value 
        })
    }

    function submitForm() {
        history.push('/testing')
    }

    function submitLogin(){
        axios.post('https://8080-f7c0f52e-6461-4223-b83f-1be565cab8b8.ws-us03.gitpod.io/users/login', {
            'email': form.email,
            'password': form.password
        })
    }

    return (
        <React.Fragment>
        <button onClick={submitForm}>Next Page</button>
        <Navbar bg="dark">
       <Navbar.Brand href="#home">
         <img
           src="./images/burger_shop_logo.png"
           width="150"
           height="120"
           className="d-inline-block align-top"
           alt="The Burger Shop Logo"
         />
       </Navbar.Brand>
       <Form inline method="POST">
         <InputGroup className="mr-3">
         <FormControl
           placeholder="Email"
           aria-label="Email"
           aria-describedby="basic-addon1"
           type = "email"
           onChange={updateFormField}
           name="email"
           value={form.email}
         />
         </InputGroup>
         <InputGroup className="mr-3">
         <FormControl
           placeholder="Password"
           aria-label="Password"
           aria-describedby="basic-addon1"
           type="password"
           onChange={updateFormField}
           name="password"
           value={form.password}
         />
         </InputGroup>
         <Button variant="light" style={{'fontFamily':'Carter One, cursive'}} onClick={submitLogin}>LOGIN</Button>{' '}
       </Form>
      </Navbar>
      <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 h-100"
                        src="./images/carousel_img_1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 h-100"
                        src="./images/carousel_img_2.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 h-100"
                        src="./images/carousel_img_3.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

      </React.Fragment>
    )
}