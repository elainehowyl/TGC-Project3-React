import React from 'react'
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar bg="dark">
       <Navbar.Brand href="#home">
         <img
           src="./images/burger_shop_logo.png"
           width="120"
           height="100"
           className="d-inline-block align-top"
           alt="React Bootstrap logo"
         />
       </Navbar.Brand>
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
  );
}

export default App;
