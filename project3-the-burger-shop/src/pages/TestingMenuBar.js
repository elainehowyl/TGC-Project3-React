import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
} from "react-router-dom";

import Button from 'react-bootstrap/Button';

export default function TestingMenuBar(){

    const [categories, setCategories] = useState([]);

    const history = useHistory();

    useEffect(() => {
        // const fetchApi = async() => {
        //     let response = await axios.get('https://8080-f7c0f52e-6461-4223-b83f-1be565cab8b8.ws-us03.gitpod.io/api/category')
        //     console.log(response.data)
        //     setCategories(response.data)
        // }
        fetchApi();
    },[])

    async function fetchApi(){
        let response = await axios.get('https://8080-f7c0f52e-6461-4223-b83f-1be565cab8b8.ws-us03.gitpod.io/api/category')
        setCategories(response.data)
    }

    function sayHi(categoryTitle){
        let newCategoryTitle = ""
        if(categoryTitle.includes(' ')){
            let index = categoryTitle.indexOf(' ')
            let firstString = categoryTitle.slice(0, index)
            let secondString = categoryTitle.slice(index+1)
            newCategoryTitle = (firstString.concat(secondString)).toLowerCase()
            // history.push(`/menu/${newCategoryTitle}`)
        }
        else{
            newCategoryTitle = categoryTitle.toLowerCase()
            // history.push(`/menu/${newCategoryTitle}`)
        }
        console.log(newCategoryTitle)
        history.push(`/menu/${newCategoryTitle}`)
    }

    function renderCategories(){
        let jsx = []
        for(let category of categories){
            jsx.push(
                <React.Fragment>
                    <Button variant="warning" style={{fontSize:"25px"}} onClick={() => sayHi(category.name)}>{category.name}</Button>
                </React.Fragment>
            )
        }
        return jsx;
    }

    return(
        <React.Fragment>
            {renderCategories()}
            <Router>
            <Switch>
                <Route exact path="/menu/breakfast">
                    <h1>Breakfast</h1>
                </Route>
                <Route exact path="/menu/desserts">
                    <h1>Desserts</h1>
                </Route>
                <Route exact path="/menu/beefburgers">
                    <h1>Beef Burgers</h1>
                </Route>
                <Route exact path="/menu/chickenburgers">
                    <h1>Chicken Burgers</h1>
                </Route>
                <Route exact path="/menu/fishburgers">
                    <h1>Fish Burgers</h1>
                </Route>
                <Route exact path="/menu/coldbeverages">
                    <h1>Cold Beverages</h1>
                </Route>
                <Route exact path="/menu/warmbeverages">
                    <h1>Warm Beverages</h1>
                </Route>
                <Route exact path="/menu/sides">
                    <h1>Sides</h1>
                </Route>
            </Switch>
            </Router>
        </React.Fragment>
    )
}