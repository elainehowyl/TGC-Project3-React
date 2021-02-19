import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory
} from "react-router-dom"

export default function UserAddress(){

    const history = useHistory();

    function loginSuccess(){
        history.push('/testing/success')
    }
    function loginFail(){
        history.push('/testing/fail')
    }
    return (
        <React.Fragment>
                <h1>Click to see results</h1>
                <button onClick={loginSuccess}>Login Success</button>
                <button onClick={loginFail}>Login Fail</button>
            <Switch>
                <Route exact path="/testing/success">
                    <h1>Successful Login</h1>
                </Route>
                 <Route exact path="/testing/fail">
                    <h1>Login failed</h1>
                </Route>
            </Switch>
        </React.Fragment>
    )
}