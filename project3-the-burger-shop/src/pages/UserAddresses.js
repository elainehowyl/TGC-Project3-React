import React, {useContext} from 'react';
// import UserContext from '../context/UserContext';
import {useLocation} from 'react-router-dom'

export default function UserAddresses(){
    // const context = useContext(UserContext)
    const location = useLocation()
    let profile = location.state.profile
    console.log("Fetching profile with useLocation: ", profile)
    return (
        <React.Fragment>
            <div>
                <h1>Fetching User Profile</h1>
            </div>
        </React.Fragment>
    )

}