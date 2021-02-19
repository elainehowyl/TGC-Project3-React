import React from 'react'
import axios from 'axios'

import Card from 'react-bootstrap/Card';

export default class FoodMenu extends React.Component{
    state = {
        foodList:[],
    }
    
    async componentDidMount(){
       let response = await axios.get('https://8080-f7c0f52e-6461-4223-b83f-1be565cab8b8.ws-us03.gitpod.io/api/food')
       console.log("Response is: ", response)
       this.setState({
           foodList:response.data
       })
       console.log("Response data is: ", this.state.foodList)
    }

    renderMenu(){
        let jsx = []
        for(let food of this.state.foodList){
            jsx.push(
                <React.Fragment>
                    <Card style={{width:"25%", height:"25%"}}>
                        <Card.Body>
                            <Card.Img variant="top" src={food.image_source}/>
                            <Card.Text>
                                <h6>{food.name}</h6>
                                <h6>Price: {food.price}</h6>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </React.Fragment>
            )
        }
        return jsx
    }

    render(){
        return(
            <React.Fragment>
                {this.renderMenu()}
            </React.Fragment>
        )
    }

    // render(){
    //     return (
    //         <React.Fragment>
    //             <Card style={{width:"25%", height:"25%"}}>
    //              <Card.Body>
    //                 <Card.Img src="./images/burger_shop_logo.png"/>
    //                <Card.Text>
    //                   Some quick example text to build on the cdwqdwqdsdsadsadsadsadsdsadasdsadsadwdwward title. qwuihfuiwededewdewdewdewdewdewdewdwdeqhfiwqhiuqwhiuwhiqwhiuhhwfuihiufhewuifhewifiuewhfuihieuwhfuiewhfiuewhfuiewh
    //                </Card.Text>
    //              </Card.Body>
    //             </Card>
    //         </React.Fragment>
    //     )
    // }
}