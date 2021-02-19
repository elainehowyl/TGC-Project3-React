import React from 'react'
import axios from 'axios'

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
    render(){
        return(
          <React.Fragment>
            <h1>Testing Menu</h1>
          </React.Fragment>
        )
    }
}