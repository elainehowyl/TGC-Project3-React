import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
    Switch,
    Route,
    useHistory,
} from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function CategoriesMenu(props) {

    const [apiFoods, setApiFoods] = useState([]);
    const [show, setShow] = useState(false);
    const [food, setFood] = useState({});
    const [quantity, setQuantity] = useState(0);
    const [hasError, setError] = useState(false);
    // const [sendToCart, setSendToCart] = useState({
    //     'foodId':'',
    //     'foodName':'',
    //     'quantity':0,
    //     'price':0,
    // });
    const [cart, setCart] = useState([])
    // const [count, setCount] = useState(0)

    // let cart = []

    function handleClose() {
        setQuantity(0);
        setShow(false);
    }

    function handleShow(food_id) {
        setShow(true);
        for (let eachFood of apiFoods) {
            if (food_id === eachFood.id) {
                setFood(eachFood)
            }
        }
    }

    useEffect(()=>{
        addToCart()
    },[cart])

   const addToCart = () => {
        // setError(false);
        if(quantity !== 0){
            let sendToCart = {
              foodId: food.id,
              foodName: food.name,
              quantity: quantity,
              price: food.price,
            }
            setCart([
                ...cart,
                sendToCart
            ])
            handleClose()
        }
        // if(quantity === 0 && count < 2){
        //     setError(true)
        // }
        // console.log(count)
        // setCount(count+1)
        localStorage.setItem('cartAll', JSON.stringify(cart))
        // console.log("EVERYTHING IN CART NOW: ", cart)
    }

//    function addToCart(){
//         setUpCart()
//         localStorage.setItem('cartAll', JSON.stringify(cart))
//         let fetchLocal = JSON.parse(localStorage.getItem('cartAll'))
//         console.log("Fetch Local: ", fetchLocal)
//         // console.log("EVERYTHING IN CART NOW: ", cart)
//     }

    const history = useHistory();

    useEffect(() => {
        fetchApi();
    }, [])

    async function fetchApi() {
        let response = await axios.get('https://8080-f7c0f52e-6461-4223-b83f-1be565cab8b8.ws-us03.gitpod.io/api/food');
        setApiFoods(response.data);
    }

    function renderFood(categoryName) {
        let jsx = []
        for (let food of apiFoods) {
            if (food.categories.name === categoryName) {
                jsx.push(
                    <React.Fragment>
                        <Card style={{ width: "25%" }}>
                            <Card.Body>
                                <Card.Img variant="top" src={food.image_source} />
                                <Card.Text>
                                    <p style={{ fontWeight: "bold" }}>{food.name}</p>
                                    <p>{food.description}</p>
                                    <p>Price: ${(food.price / 100).toFixed(2)}</p>
                                </Card.Text>
                                <div style={{ textAlign: "center" }}>
                                    <Button variant="outline-success" onClick={() => handleShow(food.id)}>Add To Cart</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </React.Fragment>
                )
            }
        }
        return jsx;
    }

    return (
        <React.Fragment>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{food.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="d-flex justify-content-center">
                        <Form.Group className="d-flex">
                            <Button onClick={()=>{
                                if(quantity > 0){
                                    setQuantity(quantity-1)
                                }
                            }}> - </Button>
                            <Form.Control value={quantity} style={{ width:'75px', textAlign: 'center' }}></Form.Control>
                            <Button onClick={()=>{
                                setQuantity(quantity+1)
                            }}> + </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=> addToCart()}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
            <Switch>
                <Route exact path="/menu">
                    {renderFood("Breakfast")}
                </Route>
                <Route exact path="/menu/desserts">
                    {renderFood("Desserts")}
                </Route>
                <Route exact path="/menu/beefburgers">
                    {renderFood("Beef Burgers")}
                </Route>
                <Route exact path="/menu/chickenburgers">
                    {renderFood("Chicken Burgers")}
                </Route>
                <Route exact path="/menu/fishburgers">
                    {renderFood("Fish Burgers")}
                </Route>
                <Route exact path="/menu/coldbeverages">
                    {renderFood("Cold Beverages")}
                </Route>
                <Route exact path="/menu/warmbeverages">
                    {renderFood("Warm Beverages")}
                </Route>
                <Route exact path="/menu/sides">
                    {renderFood("Sides")}
                </Route>
            </Switch>
        </React.Fragment>
    )
}