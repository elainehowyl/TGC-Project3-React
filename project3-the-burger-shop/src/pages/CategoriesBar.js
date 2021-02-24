import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
} from "react-router-dom";

import Button from 'react-bootstrap/Button';

export default function MenuBar(){

    const [categories, setCategories] = useState([]);

    const history = useHistory();

    useEffect(() => {
        fetchApi();
    },[])

    async function fetchApi(){
        let response = await axios.get('https://8080-f7c0f52e-6461-4223-b83f-1be565cab8b8.ws-us03.gitpod.io/api/category')
        setCategories(response.data)
    }

    function changeRoute(categoryTitle){
        let newCategoryTitle = ""
        if(categoryTitle.includes(' ')){
            let index = categoryTitle.indexOf(' ')
            let firstString = categoryTitle.slice(0, index)
            let secondString = categoryTitle.slice(index+1)
            newCategoryTitle = (firstString.concat(secondString)).toLowerCase()
        }
        else{
            if(categoryTitle === "Breakfast"){
                newCategoryTitle = ""
            }
            else{
                newCategoryTitle = categoryTitle.toLowerCase()
            }
        }
        history.push(`/menu/${newCategoryTitle}`)
    }

    function renderCategories(){
        let jsx = []
        for(let category of categories){
            jsx.push(
                <React.Fragment>
                    <Button variant="warning" style={{fontSize:"25px", width:"100%"}} onClick={() => changeRoute(category.name)}>{category.name}</Button>
                </React.Fragment>
            )
        }
        return jsx;
    }

    return(
        <React.Fragment>
            {renderCategories()}
        </React.Fragment>
    )
}