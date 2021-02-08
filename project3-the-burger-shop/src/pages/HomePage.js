import React from 'react'

import {
    useHistory
} from "react-router-dom"

import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


export default function HomePage(){

    const history = useHistory();

    function submitForm() {
        history.push('/testing')
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
       <Form inline>
         <InputGroup className="mr-3">
         <FormControl
           placeholder="Email"
           aria-label="Email"
           aria-describedby="basic-addon1"
         />
         </InputGroup>
         <InputGroup className="mr-3">
         <FormControl
           placeholder="Password"
           aria-label="Password"
           aria-describedby="basic-addon1"
         />
         </InputGroup>
         <Button variant="light" style={{'fontFamily':'Potta One, cursive'}}>LOGIN</Button>{' '}
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