import React from 'react'

import {
    Switch,
    Route,
    useHistory
} from "react-router-dom"

export default function Testing2(){

    const history = useHistory();

    function loginSuccess(){
        history.push('/testing')
    }
    function loginFail(){
        history.push('/testing/fail')
    }
    function noLogin(){
        history.push('/testing/notloggedin')
    }
    return (
        <React.Fragment>
                <h1>Click to see results</h1>
                <button onClick={loginSuccess}>Login Success</button>
                <button onClick={loginFail}>Login Fail</button>
                <button onClick={noLogin}>Not Logged In</button>
            <Switch>
                <Route exact path="/testing">
                    <h1>Successful Login</h1>
                </Route>
                 <Route exact path="/testing/fail">
                    <h1>Login failed</h1>
                </Route>
                <Route exact path="/testing/notloggedin">
                    <h1>Login failed</h1>
                </Route>
            </Switch>
        </React.Fragment>
    )
}

// this will render after login successful