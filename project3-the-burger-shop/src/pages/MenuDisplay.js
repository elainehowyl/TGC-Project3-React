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

export default function CategoriesMenu() {

    const [apiFoods, setApiFoods] = useState([]);
    const [show, setShow] = useState(false);
    const [food, setFood] = useState({})
    const [quantity, setQuantity] = useState(0)

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

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
                                if(quantity !== 0){
                                    setQuantity(quantity-1)
                                }
                            }}> - </Button>
                            <Form.Control value={quantity} style={{ width: '75px', textAlign: 'center' }}></Form.Control>
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
                    <Button variant="primary" onClick={handleClose}>
                        Add to Cart
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