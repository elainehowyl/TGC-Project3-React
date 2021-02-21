import React from 'react'
import { CartFill } from 'react-bootstrap-icons';
import axios from 'axios'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import '../styles/MenuPage.css';

import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import MenuBar from './MenuBar';
import CategoriesMenu from './CategoriesMenu'

export default class MenuPage extends React.Component{
    // state = {
    //     foodList:[],
    //     // categoryList:[],
    // }
    
    // async componentDidMount(){
    //    let menuResponse = await axios.get('https://8080-f7c0f52e-6461-4223-b83f-1be565cab8b8.ws-us03.gitpod.io/api/food')
    // //    let categoryResponse = await axios.get('https://8080-f7c0f52e-6461-4223-b83f-1be565cab8b8.ws-us03.gitpod.io/api/category')
    //    console.log("Menu Response is: ", menuResponse)
    //    this.setState({
    //        foodList:menuResponse.data,
    //     //    categoryList:categoryResponse.data
    //    })
    //    console.log("Menu Response data is: ", this.state.foodList)
    // }

    // cartPopOut = () => {
    //     alert("Cart added successfully!")
    // }

    // sayHi = (categoryTitle) => {
    //     if(categoryTitle.includes(' ')){
    //         let index = categoryTitle.indexOf('')
    //         let firstString = categoryTitle.slice(0, index)
    //         let secondString = categoryTitle.slice(index+1)
    //         let newCategoryTitle = (firstString.concat(secondString)).toLowerCase()
    //     }
    //     else{
    //         let newCategoryTitle = categoryTitle.toLowerCase()
    //     }
    // }

    // renderMenu(){
    //     let jsx = []
    //     for(let food of this.state.foodList){
    //         jsx.push(
    //             <React.Fragment>
    //                 <Card style={{width:"25%"}}>
    //                     <Card.Body>
    //                         <Card.Img variant="top" src={food.image_source}/>
    //                         <Card.Text>
    //                             <p style={{'fontWeight':'bold'}}>{food.name}</p>
    //                             <p>{food.description}</p>
    //                             <p>Price: ${(food.price/100).toFixed(2)}</p>
    //                         </Card.Text>
    //                         <div style={{'textAlign':'center'}}>
    //                             <Button variant="dark">Add To Cart</Button>
    //                         </div>
    //                     </Card.Body>
    //                 </Card>
    //             </React.Fragment>
    //         )
    //     }
    //     return jsx;
    // }

    // renderCategory(){
    //     let jsx=[]
    //     for(let category of this.state.categoryList){
    //         jsx.push(
    //             <React.Fragment>
    //                 <Button variant="warning" style={{fontSize:"25px"}} onClick={this.sayHi(category.name)}>{category.name}</Button>
    //             </React.Fragment>

    //         )
    //     }
    //     return jsx;
    // }

    // renderCategory(){
    //     let jsx=[]
    //     for(let food of this.state.foodList){
    //         if(!jsx.includes(food.categories.name)){
    //             jsx.push(
    //                 <React.Fragment>
    //                     <Button variant="yellow">{food.categories.name}</Button>
    //                 </React.Fragment>
    //             )
    //         }
    //     }
    //     return jsx;
    // }

    render(){
        return(
            <React.Fragment>
                <Navbar bg="danger">
                    <Navbar.Brand className="mr-5">
                      <img
                         src="./images/burger_shop_logo.png"
                         width="90"
                         height="80"
                         className="d-inline-block align-top"
                         alt="The Burger Shop Logo"
                       />
                    </Navbar.Brand>
                    <div id="menu-bar">
                     <Button onClick={this.cartPopOut} variant="danger">
                      <CartFill style={{color:"white", width:"40px", height:"40px"}}/>
                     </Button>
                    </div>
                </Navbar>
                <div id="main-menu">
                    <div style={{width:"20%", backgroundColor:"#ffc107"}}>
                       <MenuBar/>
                    </div>
                    <div id="menu-container">
                       <CategoriesMenu/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

