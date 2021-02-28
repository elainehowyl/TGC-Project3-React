import React from 'react'

export default function OrderSummary(){

    const userProfile = JSON.parse(localStorage.getItem('fetchedProfile'))
    const userAddressId = localStorage.getItem('fetchedSelectedAddressId')
    console.log("User Profile: ", userProfile)
    console.log("User Address Id: ", userAddressId)

    let fetchCart = JSON.parse(localStorage.getItem('cartAll'))
    console.log("Fetch Cart: ", fetchCart)
    return (
        <h1>HELLO WORLD</h1>
    )
}