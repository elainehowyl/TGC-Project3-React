import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
} from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export default function CategoriesMenu(){

    const [foods, setFoods] = useState([]);

    const history = useHistory();

    useEffect(() => {
        fetchApi();
    },[])

    async function fetchApi(){
        let response = await axios.get('https://8080-f7c0f52e-6461-4223-b83f-1be565cab8b8.ws-us03.gitpod.io/api/food');
        setFoods(response.data);
    }

    function renderFood(categoryName){
        let jsx = []
        for(let food of foods){
            if(food.categories.name === categoryName){
                jsx.push(
                    <React.Fragment>
                      <Card style={{width:"25%"}}>
                        <Card.Body>
                            <Card.Img variant="top" src={food.image_source}/>
                            <Card.Text>
                                <p style={{fontWeight:"bold"}}>{food.name}</p>
                                <p>{food.description}</p>
                                <p>Price: ${(food.price/100).toFixed(2)}</p>
                            </Card.Text>
                            <div style={{textAlign:"center"}}>
                                <Button variant="outline-success">Add To Cart</Button>
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